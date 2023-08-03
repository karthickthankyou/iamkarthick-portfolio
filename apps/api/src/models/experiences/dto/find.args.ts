import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { ExperienceOrderByWithRelationInput } from './orderBy.args'
import { ExperienceWhereInput, ExperienceWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ExperienceScalarFieldEnum, {
  name: 'ExperienceScalarFieldEnum',
})

@ArgsType()
export class FindManyExperienceArgs
  implements
    Required<Omit<Prisma.ExperienceFindManyArgs, 'include' | 'select'>>
{
  @Field(() => ExperienceWhereInput, { nullable: true })
  where: ExperienceWhereInput
  @Field(() => [ExperienceOrderByWithRelationInput], { nullable: true })
  orderBy: ExperienceOrderByWithRelationInput[]
  @Field(() => ExperienceWhereUniqueInput, { nullable: true })
  cursor: ExperienceWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.ExperienceScalarFieldEnum], { nullable: true })
  distinct: Prisma.ExperienceScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueExperienceArgs {
  @Field({ nullable: true })
  where: ExperienceWhereUniqueInput
}
