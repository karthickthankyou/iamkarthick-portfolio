import { InputType, PickType } from '@nestjs/graphql'
import { Resume } from '../entities/resume.entity'

@InputType()
export class CreateResumeInput extends PickType(
  Resume,
  ['fullName', 'skills', 'summary'],
  InputType,
) {}
