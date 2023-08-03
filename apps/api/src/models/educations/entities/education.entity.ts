import { Field, ObjectType } from '@nestjs/graphql'
import { Education as EducationType } from '@prisma/client'

@ObjectType()
export class Education implements EducationType {
  id: number
  resumeId: number
  school: string
  degree: string
  start: Date
  @Field({ nullable: true })
  end: Date
  details: string[]
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
