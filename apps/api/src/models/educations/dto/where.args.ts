import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  StringListFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ResumeRelationFilter } from 'src/models/resumes/dto/where.args'

@InputType()
export class EducationWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class EducationWhereInput
  implements Required<Prisma.EducationWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => IntFilter, { nullable: true })
  resumeId: IntFilter
  @Field(() => StringFilter, { nullable: true })
  school: StringFilter
  @Field(() => StringFilter, { nullable: true })
  degree: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  start: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  end: DateTimeFilter
  @Field(() => StringListFilter, { nullable: true })
  details: StringListFilter
  @Field(() => ResumeRelationFilter, { nullable: true })
  resume: ResumeRelationFilter

  @Field(() => [EducationWhereInput], { nullable: true })
  AND: EducationWhereInput[]
  @Field(() => [EducationWhereInput], { nullable: true })
  OR: EducationWhereInput[]
  @Field(() => [EducationWhereInput], { nullable: true })
  NOT: EducationWhereInput[]
}

@InputType()
export class EducationListRelationFilter {
  @Field(() => EducationWhereInput)
  every?: EducationWhereInput
  @Field(() => EducationWhereInput)
  some?: EducationWhereInput
  @Field(() => EducationWhereInput)
  none?: EducationWhereInput
}

@InputType()
export class EducationRelationFilter {
  @Field(() => EducationWhereInput)
  is?: EducationWhereInput
  @Field(() => EducationWhereInput)
  isNot?: EducationWhereInput
}
