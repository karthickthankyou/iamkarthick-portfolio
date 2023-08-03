import { Field, ObjectType } from '@nestjs/graphql'
import { Url as UrlType } from '@prisma/client'

@ObjectType()
export class Url implements UrlType {
  id: number
  title: string
  description: string
  url: string
  @Field({ nullable: true })
  projectId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
