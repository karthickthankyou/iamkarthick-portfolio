import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input'
import { EducationListRelationFilter } from 'src/models/educations/dto/where.args'
import { ExperienceListRelationFilter } from 'src/models/experiences/dto/where.args'
import { ProjectListRelationFilter } from 'src/models/projects/dto/where.args'
import { SocialListRelationFilter } from 'src/models/socials/dto/where.args'

@InputType()
export class ResumeWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ResumeWhereInput implements Required<Prisma.ResumeWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => StringFilter, { nullable: true })
  fullName: StringFilter
  @Field(() => StringFilter, { nullable: true })
  summary: StringFilter
  @Field(() => StringListFilter, { nullable: true })
  skills: StringListFilter
  @Field(() => ExperienceListRelationFilter, { nullable: true })
  experience: ExperienceListRelationFilter
  @Field(() => EducationListRelationFilter, { nullable: true })
  education: EducationListRelationFilter
  @Field(() => SocialListRelationFilter, { nullable: true })
  socials: SocialListRelationFilter
  @Field(() => ProjectListRelationFilter, { nullable: true })
  projects: ProjectListRelationFilter

  @Field(() => [ResumeWhereInput], { nullable: true })
  AND: ResumeWhereInput[]
  @Field(() => [ResumeWhereInput], { nullable: true })
  OR: ResumeWhereInput[]
  @Field(() => [ResumeWhereInput], { nullable: true })
  NOT: ResumeWhereInput[]
}

@InputType()
export class ResumeListRelationFilter {
  @Field(() => ResumeWhereInput)
  every?: ResumeWhereInput
  @Field(() => ResumeWhereInput)
  some?: ResumeWhereInput
  @Field(() => ResumeWhereInput)
  none?: ResumeWhereInput
}

@InputType()
export class ResumeRelationFilter {
  @Field(() => ResumeWhereInput)
  is?: ResumeWhereInput
  @Field(() => ResumeWhereInput)
  isNot?: ResumeWhereInput
}
