import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { IntFilter, StringFilter } from 'src/common/dtos/common.input'
import { ProjectRelationFilter } from 'src/models/projects/dto/where.args'

@InputType()
export class TechnologyWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class TechnologyWhereInput
  implements Required<Prisma.TechnologyWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => StringFilter, { nullable: true })
  description: StringFilter
  @Field(() => IntFilter, { nullable: true })
  projectId: IntFilter
  @Field(() => ProjectRelationFilter, { nullable: true })
  project: ProjectRelationFilter

  @Field(() => [TechnologyWhereInput], { nullable: true })
  AND: TechnologyWhereInput[]
  @Field(() => [TechnologyWhereInput], { nullable: true })
  OR: TechnologyWhereInput[]
  @Field(() => [TechnologyWhereInput], { nullable: true })
  NOT: TechnologyWhereInput[]
}

@InputType()
export class TechnologyListRelationFilter {
  @Field(() => TechnologyWhereInput)
  every?: TechnologyWhereInput
  @Field(() => TechnologyWhereInput)
  some?: TechnologyWhereInput
  @Field(() => TechnologyWhereInput)
  none?: TechnologyWhereInput
}

@InputType()
export class TechnologyRelationFilter {
  @Field(() => TechnologyWhereInput)
  is?: TechnologyWhereInput
  @Field(() => TechnologyWhereInput)
  isNot?: TechnologyWhereInput
}
