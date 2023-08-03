import { ObjectType } from '@nestjs/graphql'
import { Resume as ResumeType } from '@prisma/client'

@ObjectType()
export class Resume implements ResumeType {
  id: number
  fullName: string
  summary: string
  skills: string[]
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
