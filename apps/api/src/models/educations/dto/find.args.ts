import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { EducationOrderByWithRelationInput } from './orderBy.args'
import { EducationWhereInput, EducationWhereUniqueInput } from './where.args'

registerEnumType(Prisma.EducationScalarFieldEnum, {
  name: 'EducationScalarFieldEnum',
})

@ArgsType()
export class FindManyEducationArgs
  implements Required<Omit<Prisma.EducationFindManyArgs, 'include' | 'select'>>
{
  @Field(() => EducationWhereInput, { nullable: true })
  where: EducationWhereInput
  @Field(() => [EducationOrderByWithRelationInput], { nullable: true })
  orderBy: EducationOrderByWithRelationInput[]
  @Field(() => EducationWhereUniqueInput, { nullable: true })
  cursor: EducationWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.EducationScalarFieldEnum], { nullable: true })
  distinct: Prisma.EducationScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueEducationArgs {
  @Field({ nullable: true })
  where: EducationWhereUniqueInput
}
