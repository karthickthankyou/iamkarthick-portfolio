import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ResumeOrderByWithRelationInput } from 'src/models/resumes/dto/orderBy.args'

@InputType()
export class ExperienceOrderByWithRelationInput
  implements Required<Prisma.ExperienceOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  resumeId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  company: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  start: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  end: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  details: Prisma.SortOrder
  @Field(() => ResumeOrderByWithRelationInput, { nullable: true })
  resume: ResumeOrderByWithRelationInput
}

@InputType()
export class ExperienceOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
