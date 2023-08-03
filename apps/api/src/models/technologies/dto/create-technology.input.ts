import { InputType, PickType } from '@nestjs/graphql'
import { Technology } from '../entities/technology.entity'

@InputType()
export class CreateTechnologyInput extends PickType(
  Technology,
  ['description', 'name', 'projectId'],
  InputType,
) {}
