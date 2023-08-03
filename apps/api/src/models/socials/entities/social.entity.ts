import { Field, ObjectType } from '@nestjs/graphql'
import { Social as SocialType } from '@prisma/client'

@ObjectType()
export class Social implements SocialType {
  id: number
  title: string
  description: string
  url: string
  @Field({ nullable: true })
  resumeId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
