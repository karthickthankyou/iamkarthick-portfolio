import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ResumeOrderByWithRelationInput } from 'src/models/resumes/dto/orderBy.args'

@InputType()
export class SocialOrderByWithRelationInput
  implements Required<Prisma.SocialOrderByWithRelationInput>
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
  resumeId: Prisma.SortOrder
  @Field(() => ResumeOrderByWithRelationInput, { nullable: true })
  resume: ResumeOrderByWithRelationInput
}

@InputType()
export class SocialOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
