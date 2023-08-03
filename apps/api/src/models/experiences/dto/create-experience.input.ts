import { InputType, PickType } from '@nestjs/graphql'
import { Experience } from '../entities/experience.entity'

@InputType()
export class CreateExperienceInput extends PickType(
  Experience,
  ['resumeId', 'title', 'company', 'start', 'end', 'details'],
  InputType,
) {}
