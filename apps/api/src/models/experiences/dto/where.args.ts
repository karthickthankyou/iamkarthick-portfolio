import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input'
import { ResumeRelationFilter } from 'src/models/resumes/dto/where.args'

@InputType()
export class ExperienceWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ExperienceWhereInput
  implements Required<Prisma.ExperienceWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => IntFilter, { nullable: true })
  resumeId: IntFilter
  @Field(() => StringFilter, { nullable: true })
  title: StringFilter
  @Field(() => StringFilter, { nullable: true })
  company: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  start: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  end: DateTimeFilter
  @Field(() => StringListFilter, { nullable: true })
  details: StringListFilter
  @Field(() => ResumeRelationFilter, { nullable: true })
  resume: ResumeRelationFilter

  @Field(() => [ExperienceWhereInput], { nullable: true })
  AND: ExperienceWhereInput[]
  @Field(() => [ExperienceWhereInput], { nullable: true })
  OR: ExperienceWhereInput[]
  @Field(() => [ExperienceWhereInput], { nullable: true })
  NOT: ExperienceWhereInput[]
}

@InputType()
export class ExperienceListRelationFilter {
  @Field(() => ExperienceWhereInput)
  every?: ExperienceWhereInput
  @Field(() => ExperienceWhereInput)
  some?: ExperienceWhereInput
  @Field(() => ExperienceWhereInput)
  none?: ExperienceWhereInput
}

@InputType()
export class ExperienceRelationFilter {
  @Field(() => ExperienceWhereInput)
  is?: ExperienceWhereInput
  @Field(() => ExperienceWhereInput)
  isNot?: ExperienceWhereInput
}
