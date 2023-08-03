import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { EducationsService } from './educations.service'
import { Education } from './entities/education.entity'
import { FindManyEducationArgs, FindUniqueEducationArgs } from './dto/find.args'
import { CreateEducationInput } from './dto/create-education.input'
import { UpdateEducationInput } from './dto/update-education.input'
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Resume } from '../resumes/entities/resume.entity'

@Resolver(() => Education)
export class EducationsResolver {
  constructor(
    private readonly educationsService: EducationsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin')
  @Mutation(() => Education)
  createEducation(@Args('createEducationInput') args: CreateEducationInput) {
    return this.educationsService.create(args)
  }

  @Query(() => [Education], { name: 'educations' })
  findAll(@Args() args: FindManyEducationArgs) {
    return this.educationsService.findAll(args)
  }

  @Query(() => Education, { name: 'education' })
  findOne(@Args() args: FindUniqueEducationArgs) {
    return this.educationsService.findOne(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Education)
  updateEducation(@Args('updateEducationInput') args: UpdateEducationInput) {
    return this.educationsService.update(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Education)
  removeEducation(@Args() args: FindUniqueEducationArgs) {
    return this.educationsService.remove(args)
  }

  @ResolveField(() => Resume)
  resume(@Parent() parent: Education) {
    return this.prisma.resume.findUnique({
      where: { id: parent.resumeId },
    })
  }
}
