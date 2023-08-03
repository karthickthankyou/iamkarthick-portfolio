import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { ResumeOrderByWithRelationInput } from './orderBy.args'
import { ResumeWhereInput, ResumeWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ResumeScalarFieldEnum, {
  name: 'ResumeScalarFieldEnum',
})

@ArgsType()
export class FindManyResumeArgs
  implements Required<Omit<Prisma.ResumeFindManyArgs, 'include' | 'select'>>
{
  @Field(() => ResumeWhereInput, { nullable: true })
  where: ResumeWhereInput
  @Field(() => [ResumeOrderByWithRelationInput], { nullable: true })
  orderBy: ResumeOrderByWithRelationInput[]
  @Field(() => ResumeWhereUniqueInput, { nullable: true })
  cursor: ResumeWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.ResumeScalarFieldEnum], { nullable: true })
  distinct: Prisma.ResumeScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueResumeArgs {
  @Field({ nullable: true })
  where: ResumeWhereUniqueInput
}
