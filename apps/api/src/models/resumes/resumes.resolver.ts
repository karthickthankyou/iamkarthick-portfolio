import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ResumesService } from './resumes.service'
import { Resume } from './entities/resume.entity'
import { FindManyResumeArgs, FindUniqueResumeArgs } from './dto/find.args'
import { CreateResumeInput } from './dto/create-resume.input'
import { UpdateResumeInput } from './dto/update-resume.input'
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'

@Resolver(() => Resume)
export class ResumesResolver {
  constructor(private readonly resumesService: ResumesService) {}
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
}
