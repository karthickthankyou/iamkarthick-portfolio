import { Field, ObjectType } from '@nestjs/graphql'
import { Technology as TechnologyType } from '@prisma/client'

@ObjectType()
export class Technology implements TechnologyType {
  id: number
  name: string
  description: string
  @Field({ nullable: true })
  projectId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
