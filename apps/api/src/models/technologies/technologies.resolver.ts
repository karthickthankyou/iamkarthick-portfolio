import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TechnologiesService } from './technologies.service'
import { Technology } from './entities/technology.entity'
import {
  FindManyTechnologyArgs,
  FindUniqueTechnologyArgs,
} from './dto/find.args'
import { CreateTechnologyInput } from './dto/create-technology.input'
import { UpdateTechnologyInput } from './dto/update-technology.input'

@Resolver(() => Technology)
export class TechnologiesResolver {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Mutation(() => Technology)
  createTechnology(@Args('createTechnologyInput') args: CreateTechnologyInput) {
    return this.technologiesService.create(args)
  }

  @Query(() => [Technology], { name: 'technologies' })
  findAll(@Args() args: FindManyTechnologyArgs) {
    return this.technologiesService.findAll(args)
  }

  @Query(() => Technology, { name: 'technology' })
  findOne(@Args() args: FindUniqueTechnologyArgs) {
    return this.technologiesService.findOne(args)
  }

  @Mutation(() => Technology)
  updateTechnology(@Args('updateTechnologyInput') args: UpdateTechnologyInput) {
    return this.technologiesService.update(args)
  }

  @Mutation(() => Technology)
  removeTechnology(@Args() args: FindUniqueTechnologyArgs) {
    return this.technologiesService.remove(args)
  }
}
