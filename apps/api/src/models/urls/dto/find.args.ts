import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { UrlOrderByWithRelationInput } from './orderBy.args'
import { UrlWhereInput, UrlWhereUniqueInput } from './where.args'

registerEnumType(Prisma.UrlScalarFieldEnum, {
  name: 'UrlScalarFieldEnum',
})

@ArgsType()
export class FindManyUrlArgs
  implements Required<Omit<Prisma.UrlFindManyArgs, 'include' | 'select'>>
{
  @Field(() => UrlWhereInput, { nullable: true })
  where: UrlWhereInput
  @Field(() => [UrlOrderByWithRelationInput], { nullable: true })
  orderBy: UrlOrderByWithRelationInput[]
  @Field(() => UrlWhereUniqueInput, { nullable: true })
  cursor: UrlWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.UrlScalarFieldEnum], { nullable: true })
  distinct: Prisma.UrlScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueUrlArgs {
  @Field({ nullable: true })
  where: UrlWhereUniqueInput
}
