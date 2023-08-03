import { InputType, PickType } from '@nestjs/graphql'
import { Education } from '../entities/education.entity'

@InputType()
export class CreateEducationInput extends PickType(
  Education,
  ['resumeId', 'school', 'degree', 'start', 'details'],
  InputType,
) {}
