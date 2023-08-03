import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ProjectOrderByWithRelationInput } from 'src/models/projects/dto/orderBy.args'

@InputType()
export class UrlOrderByWithRelationInput
  implements Required<Prisma.UrlOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  url: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  projectId: Prisma.SortOrder
  @Field(() => ProjectOrderByWithRelationInput, { nullable: true })
  project: ProjectOrderByWithRelationInput
}

@InputType()
export class UrlOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
