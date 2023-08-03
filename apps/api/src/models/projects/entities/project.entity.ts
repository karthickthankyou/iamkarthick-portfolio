import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Project as ProjectType } from '@prisma/client'

registerEnumType($Enums.Category, {
  name: 'Category',
})

@ObjectType()
export class Project implements ProjectType {
  id: number
  createdAt: Date
  title: string
  description: string
  images: string[]

  @Field({ nullable: true })
  github: string
  linesOfCode: number
  tags: string[]
  @Field(() => $Enums.Category)
  category: $Enums.Category

  @Field({ nullable: true })
  resumeId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
