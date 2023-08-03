import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { IntFilter, StringFilter } from 'src/common/dtos/common.input'
import { ResumeRelationFilter } from 'src/models/resumes/dto/where.args'

@InputType()
export class SocialWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class SocialWhereInput implements Required<Prisma.SocialWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => StringFilter, { nullable: true })
  title: StringFilter
  @Field(() => StringFilter, { nullable: true })
  description: StringFilter
  @Field(() => StringFilter, { nullable: true })
  url: StringFilter
  @Field(() => IntFilter, { nullable: true })
  resumeId: IntFilter
  @Field(() => ResumeRelationFilter, { nullable: true })
  resume: ResumeRelationFilter

  @Field(() => [SocialWhereInput], { nullable: true })
  AND: SocialWhereInput[]
  @Field(() => [SocialWhereInput], { nullable: true })
  OR: SocialWhereInput[]
  @Field(() => [SocialWhereInput], { nullable: true })
  NOT: SocialWhereInput[]
}

@InputType()
export class SocialListRelationFilter {
  @Field(() => SocialWhereInput)
  every?: SocialWhereInput
  @Field(() => SocialWhereInput)
  some?: SocialWhereInput
  @Field(() => SocialWhereInput)
  none?: SocialWhereInput
}

@InputType()
export class SocialRelationFilter {
  @Field(() => SocialWhereInput)
  is?: SocialWhereInput
  @Field(() => SocialWhereInput)
  isNot?: SocialWhereInput
}
