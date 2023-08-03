import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ProjectsService } from './projects.service'
import { Project } from './entities/project.entity'
import { FindManyProjectArgs, FindUniqueProjectArgs } from './dto/find.args'
import { CreateProjectInput } from './dto/create-project.input'
import { UpdateProjectInput } from './dto/update-project.input'
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'
import { Technology } from '../technologies/entities/technology.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Resume } from '../resumes/entities/resume.entity'

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly prisma: PrismaService,
  ) {}

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

  @ResolveField(() => [Technology])
  technologies(@Parent() parent: Project) {
    return this.prisma.social.findMany({
      where: { resumeId: { equals: parent.id } },
    })
  }

  @ResolveField(() => Resume)
  resume(@Parent() parent: Project) {
    return this.prisma.resume.findUnique({
      where: { id: parent.resumeId },
    })
  }
}
