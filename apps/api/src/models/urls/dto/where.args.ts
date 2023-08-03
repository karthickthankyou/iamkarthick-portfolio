import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { IntFilter, StringFilter } from 'src/common/dtos/common.input'
import { ProjectRelationFilter } from 'src/models/projects/dto/where.args'

@InputType()
export class UrlWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class UrlWhereInput implements Required<Prisma.UrlWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => StringFilter, { nullable: true })
  title: StringFilter
  @Field(() => StringFilter, { nullable: true })
  description: StringFilter
  @Field(() => StringFilter, { nullable: true })
  url: StringFilter
  @Field(() => IntFilter, { nullable: true })
  projectId: IntFilter
  @Field(() => ProjectRelationFilter, { nullable: true })
  project: ProjectRelationFilter

  @Field(() => [UrlWhereInput], { nullable: true })
  AND: UrlWhereInput[]
  @Field(() => [UrlWhereInput], { nullable: true })
  OR: UrlWhereInput[]
  @Field(() => [UrlWhereInput], { nullable: true })
  NOT: UrlWhereInput[]
}

@InputType()
export class UrlListRelationFilter {
  @Field(() => UrlWhereInput)
  every?: UrlWhereInput
  @Field(() => UrlWhereInput)
  some?: UrlWhereInput
  @Field(() => UrlWhereInput)
  none?: UrlWhereInput
}

@InputType()
export class UrlRelationFilter {
  @Field(() => UrlWhereInput)
  is?: UrlWhereInput
  @Field(() => UrlWhereInput)
  isNot?: UrlWhereInput
}
