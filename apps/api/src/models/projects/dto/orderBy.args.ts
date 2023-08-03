import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ResumeOrderByWithRelationInput } from 'src/models/resumes/dto/orderBy.args'
import { TechnologyOrderByRelationAggregateInput } from 'src/models/technologies/dto/orderBy.args'
import { UrlOrderByRelationAggregateInput } from 'src/models/urls/dto/orderBy.args'

@InputType()
export class ProjectOrderByWithRelationInput
  implements Required<Prisma.ProjectOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  images: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  github: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  linesOfCode: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  tags: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  category: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  resumeId: Prisma.SortOrder
  @Field(() => UrlOrderByRelationAggregateInput, { nullable: true })
  urls: UrlOrderByRelationAggregateInput
  @Field(() => TechnologyOrderByRelationAggregateInput, { nullable: true })
  technologies: TechnologyOrderByRelationAggregateInput
  @Field(() => ResumeOrderByWithRelationInput, { nullable: true })
  resume: ResumeOrderByWithRelationInput
}

@InputType()
export class ProjectOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
