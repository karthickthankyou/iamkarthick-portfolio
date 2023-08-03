import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { SocialsService } from './socials.service'
import { Social } from './entities/social.entity'
import { FindManySocialArgs, FindUniqueSocialArgs } from './dto/find.args'
import { CreateSocialInput } from './dto/create-social.input'
import { UpdateSocialInput } from './dto/update-social.input'
import { Resume } from '../resumes/entities/resume.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Social)
export class SocialsResolver {
  constructor(
    private readonly socialsService: SocialsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Social)
  createSocial(@Args('createSocialInput') args: CreateSocialInput) {
    return this.socialsService.create(args)
  }

  @Query(() => [Social], { name: 'socials' })
  findAll(@Args() args: FindManySocialArgs) {
    return this.socialsService.findAll(args)
  }

  @Query(() => Social, { name: 'social' })
  findOne(@Args() args: FindUniqueSocialArgs) {
    return this.socialsService.findOne(args)
  }

  @Mutation(() => Social)
  updateSocial(@Args('updateSocialInput') args: UpdateSocialInput) {
    return this.socialsService.update(args)
  }

  @Mutation(() => Social)
  removeSocial(@Args() args: FindUniqueSocialArgs) {
    return this.socialsService.remove(args)
  }

  @ResolveField(() => Resume)
  resume(@Parent() parent: Social) {
    return this.prisma.resume.findUnique({
      where: { id: parent.resumeId },
    })
  }
}
