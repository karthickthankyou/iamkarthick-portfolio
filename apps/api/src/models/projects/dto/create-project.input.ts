import { InputType, PickType } from '@nestjs/graphql'
import { Project } from '../entities/project.entity'

@InputType()
export class CreateProjectInput extends PickType(
  Project,
  [
    'category',
    'description',
    'github',
    'images',
    'linesOfCode',
    'resumeId',
    'tags',
    'title',
  ],
  InputType,
) {}
