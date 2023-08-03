import { Field, InputType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input'
import { ResumeRelationFilter } from 'src/models/resumes/dto/where.args'
import { TechnologyListRelationFilter } from 'src/models/technologies/dto/where.args'
import { UrlListRelationFilter } from 'src/models/urls/dto/where.args'

@InputType()
export class EnumCategoryFilter {
  @Field(() => $Enums.Category)
  equals?: $Enums.Category;
  @Field(() => [$Enums.Category])
  in?: $Enums.Category[]
  @Field(() => [$Enums.Category])
  notIn?: $Enums.Category[]
  @Field(() => $Enums.Category)
  not?: $Enums.Category
}

@InputType()
export class ProjectWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ProjectWhereInput implements Required<Prisma.ProjectWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  title: StringFilter
  @Field(() => StringFilter, { nullable: true })
  description: StringFilter
  @Field(() => StringListFilter, { nullable: true })
  images: StringListFilter
  @Field(() => StringFilter, { nullable: true })
  github: StringFilter
  @Field(() => IntFilter, { nullable: true })
  linesOfCode: IntFilter
  @Field(() => StringListFilter, { nullable: true })
  tags: StringListFilter
  @Field(() => EnumCategoryFilter, { nullable: true })
  category: EnumCategoryFilter
  @Field(() => IntFilter, { nullable: true })
  resumeId: IntFilter
  @Field(() => UrlListRelationFilter, { nullable: true })
  urls: UrlListRelationFilter
  @Field(() => TechnologyListRelationFilter, { nullable: true })
  technologies: TechnologyListRelationFilter
  @Field(() => ResumeRelationFilter, { nullable: true })
  resume: ResumeRelationFilter

  @Field(() => [ProjectWhereInput], { nullable: true })
  AND: ProjectWhereInput[]
  @Field(() => [ProjectWhereInput], { nullable: true })
  OR: ProjectWhereInput[]
  @Field(() => [ProjectWhereInput], { nullable: true })
  NOT: ProjectWhereInput[]
}

@InputType()
export class ProjectListRelationFilter {
  @Field(() => ProjectWhereInput)
  every?: ProjectWhereInput
  @Field(() => ProjectWhereInput)
  some?: ProjectWhereInput
  @Field(() => ProjectWhereInput)
  none?: ProjectWhereInput
}

@InputType()
export class ProjectRelationFilter {
  @Field(() => ProjectWhereInput)
  is?: ProjectWhereInput
  @Field(() => ProjectWhereInput)
  isNot?: ProjectWhereInput
}
