import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ResumeOrderByWithRelationInput } from 'src/models/resumes/dto/orderBy.args'

@InputType()
export class EducationOrderByWithRelationInput
  implements Required<Prisma.EducationOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  resumeId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  school: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  degree: Prisma.SortOrder
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
export class EducationOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
