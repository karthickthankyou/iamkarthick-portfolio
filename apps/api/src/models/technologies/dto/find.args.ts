import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { TechnologyOrderByWithRelationInput } from './orderBy.args'
import { TechnologyWhereInput, TechnologyWhereUniqueInput } from './where.args'

registerEnumType(Prisma.TechnologyScalarFieldEnum, {
  name: 'TechnologyScalarFieldEnum',
})

@ArgsType()
export class FindManyTechnologyArgs
  implements
    Required<Omit<Prisma.TechnologyFindManyArgs, 'include' | 'select'>>
{
  @Field(() => TechnologyWhereInput, { nullable: true })
  where: TechnologyWhereInput
  @Field(() => [TechnologyOrderByWithRelationInput], { nullable: true })
  orderBy: TechnologyOrderByWithRelationInput[]
  @Field(() => TechnologyWhereUniqueInput, { nullable: true })
  cursor: TechnologyWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.TechnologyScalarFieldEnum], { nullable: true })
  distinct: Prisma.TechnologyScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueTechnologyArgs {
  @Field({ nullable: true })
  where: TechnologyWhereUniqueInput
}
