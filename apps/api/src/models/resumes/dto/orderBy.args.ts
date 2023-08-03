import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EducationOrderByRelationAggregateInput } from 'src/models/educations/dto/orderBy.args'
import { ExperienceOrderByRelationAggregateInput } from 'src/models/experiences/dto/orderBy.args'
import { ProjectOrderByRelationAggregateInput } from 'src/models/projects/dto/orderBy.args'
import { SocialOrderByRelationAggregateInput } from 'src/models/socials/dto/orderBy.args'

@InputType()
export class ResumeOrderByWithRelationInput
  implements Required<Prisma.ResumeOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  fullName: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  summary: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  skills: Prisma.SortOrder
  @Field(() => ExperienceOrderByRelationAggregateInput, { nullable: true })
  experience: ExperienceOrderByRelationAggregateInput
  @Field(() => EducationOrderByRelationAggregateInput, { nullable: true })
  education: EducationOrderByRelationAggregateInput
  @Field(() => SocialOrderByRelationAggregateInput, { nullable: true })
  socials: SocialOrderByRelationAggregateInput
  @Field(() => ProjectOrderByRelationAggregateInput, { nullable: true })
  projects: ProjectOrderByRelationAggregateInput
}

@InputType()
export class ResumeOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
