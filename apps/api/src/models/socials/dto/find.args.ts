import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { SocialOrderByWithRelationInput } from './orderBy.args'
import { SocialWhereInput, SocialWhereUniqueInput } from './where.args'

registerEnumType(Prisma.SocialScalarFieldEnum, {
  name: 'SocialScalarFieldEnum',
})

@ArgsType()
export class FindManySocialArgs
  implements Required<Omit<Prisma.SocialFindManyArgs, 'include' | 'select'>>
{
  @Field(() => SocialWhereInput, { nullable: true })
  where: SocialWhereInput
  @Field(() => [SocialOrderByWithRelationInput], { nullable: true })
  orderBy: SocialOrderByWithRelationInput[]
  @Field(() => SocialWhereUniqueInput, { nullable: true })
  cursor: SocialWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.SocialScalarFieldEnum], { nullable: true })
  distinct: Prisma.SocialScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueSocialArgs {
  @Field({ nullable: true })
  where: SocialWhereUniqueInput
}
