import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { UrlsService } from './urls.service'
import { Url } from './entities/url.entity'
import { FindManyUrlArgs, FindUniqueUrlArgs } from './dto/find.args'
import { CreateUrlInput } from './dto/create-url.input'
import { UpdateUrlInput } from './dto/update-url.input'
import { Project } from '../projects/entities/project.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Url)
export class UrlsResolver {
  constructor(
    private readonly urlsService: UrlsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Url)
  createUrl(@Args('createUrlInput') args: CreateUrlInput) {
    return this.urlsService.create(args)
  }

  @Query(() => [Url], { name: 'urls' })
  findAll(@Args() args: FindManyUrlArgs) {
    return this.urlsService.findAll(args)
  }

  @Query(() => Url, { name: 'url' })
  findOne(@Args() args: FindUniqueUrlArgs) {
    return this.urlsService.findOne(args)
  }

  @Mutation(() => Url)
  updateUrl(@Args('updateUrlInput') args: UpdateUrlInput) {
    return this.urlsService.update(args)
  }

  @Mutation(() => Url)
  removeUrl(@Args() args: FindUniqueUrlArgs) {
    return this.urlsService.remove(args)
  }

  @ResolveField(() => Project)
  project(@Parent() parent: Url) {
    return this.prisma.project.findUnique({
      where: { id: parent.projectId },
    })
  }
}
