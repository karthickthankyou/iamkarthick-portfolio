import { CreateResumeInput } from './create-resume.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Resume } from '@prisma/client'

@InputType()
export class UpdateResumeInput extends PartialType(CreateResumeInput) {
  id: Resume['id']
}
