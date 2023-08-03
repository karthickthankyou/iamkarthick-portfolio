import { Field, ObjectType } from '@nestjs/graphql'
import { Experience as ExperienceType } from '@prisma/client'

@ObjectType()
export class Experience implements ExperienceType {
  id: number
  resumeId: number
  title: string
  company: string
  start: Date
  @Field({ nullable: true })
  end: Date
  details: string[]
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
