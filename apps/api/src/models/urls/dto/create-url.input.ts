import { InputType, PickType } from '@nestjs/graphql'
import { Url } from '../entities/url.entity'

@InputType()
export class CreateUrlInput extends PickType(
  Url,
  ['description', 'projectId', 'title', 'url'],
  InputType,
) {}
