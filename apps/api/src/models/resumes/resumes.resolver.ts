import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ResumesService } from './resumes.service'
import { Resume } from './entities/resume.entity'
import { FindManyResumeArgs, FindUniqueResumeArgs } from './dto/find.args'
import { CreateResumeInput } from './dto/create-resume.input'
import { UpdateResumeInput } from './dto/update-resume.input'
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'
import { Project } from '../projects/entities/project.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Experience } from '../experiences/entities/experience.entity'
import { Education } from '../educations/entities/education.entity'
import { Social } from '../socials/entities/social.entity'

@Resolver(() => Resume)
export class ResumesResolver {
  constructor(
    private readonly resumesService: ResumesService,
    private readonly prisma: PrismaService,
  ) {}
  @AllowAuthenticated('admin')
  @Mutation(() => Resume)
  createResume(@Args('createResumeInput') args: CreateResumeInput) {
    return this.resumesService.create(args)
  }

  @Query(() => [Resume], { name: 'resumes' })
  findAll(@Args() args: FindManyResumeArgs) {
    return this.resumesService.findAll(args)
  }

  @Query(() => Resume, { name: 'resume' })
  findOne(@Args() args: FindUniqueResumeArgs) {
    return this.resumesService.findOne(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Resume)
  updateResume(@Args('updateResumeInput') args: UpdateResumeInput) {
    return this.resumesService.update(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Resume)
  removeResume(@Args() args: FindUniqueResumeArgs) {
    return this.resumesService.remove(args)
  }

  @ResolveField(() => [Project])
  projects(@Parent() parent: Resume) {
    return this.prisma.project.findMany({
      where: { resumeId: { equals: parent.id } },
    })
  }

  @ResolveField(() => [Education])
  educations(@Parent() parent: Resume) {
    return this.prisma.education.findMany({
      where: { resumeId: { equals: parent.id } },
    })
  }

  @ResolveField(() => [Experience])
  experiences(@Parent() parent: Resume) {
    return this.prisma.experience.findMany({
      where: { resumeId: { equals: parent.id } },
    })
  }

  @ResolveField(() => [Social])
  socials(@Parent() parent: Resume) {
    return this.prisma.social.findMany({
      where: { resumeId: { equals: parent.id } },
    })
  }
}
