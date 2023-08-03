import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ExperiencesService } from './experiences.service'
import { Experience } from './entities/experience.entity'
import {
  FindManyExperienceArgs,
  FindUniqueExperienceArgs,
} from './dto/find.args'
import { CreateExperienceInput } from './dto/create-experience.input'
import { UpdateExperienceInput } from './dto/update-experience.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Resume } from '../resumes/entities/resume.entity'

@Resolver(() => Experience)
export class ExperiencesResolver {
  constructor(
    private readonly experiencesService: ExperiencesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Experience)
  createExperience(@Args('createExperienceInput') args: CreateExperienceInput) {
    return this.experiencesService.create(args)
  }

  @Query(() => [Experience], { name: 'experiences' })
  findAll(@Args() args: FindManyExperienceArgs) {
    return this.experiencesService.findAll(args)
  }

  @Query(() => Experience, { name: 'experience' })
  findOne(@Args() args: FindUniqueExperienceArgs) {
    return this.experiencesService.findOne(args)
  }

  @Mutation(() => Experience)
  updateExperience(@Args('updateExperienceInput') args: UpdateExperienceInput) {
    return this.experiencesService.update(args)
  }

  @Mutation(() => Experience)
  removeExperience(@Args() args: FindUniqueExperienceArgs) {
    return this.experiencesService.remove(args)
  }

  @ResolveField(() => Resume)
  resume(@Parent() parent: Experience) {
    return this.prisma.resume.findUnique({
      where: { id: parent.resumeId },
    })
  }
}
