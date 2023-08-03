import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProjectsService } from './projects.service'
import { Project } from './entities/project.entity'
import { FindManyProjectArgs, FindUniqueProjectArgs } from './dto/find.args'
import { CreateProjectInput } from './dto/create-project.input'
import { UpdateProjectInput } from './dto/update-project.input'
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @AllowAuthenticated('admin')
  @Mutation(() => Project)
  createProject(@Args('createProjectInput') args: CreateProjectInput) {
    return this.projectsService.create(args)
  }

  @Query(() => [Project], { name: 'projects' })
  findAll(@Args() args: FindManyProjectArgs) {
    return this.projectsService.findAll(args)
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args() args: FindUniqueProjectArgs) {
    return this.projectsService.findOne(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Project)
  updateProject(@Args('updateProjectInput') args: UpdateProjectInput) {
    return this.projectsService.update(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Project)
  removeProject(@Args() args: FindUniqueProjectArgs) {
    return this.projectsService.remove(args)
  }
}
