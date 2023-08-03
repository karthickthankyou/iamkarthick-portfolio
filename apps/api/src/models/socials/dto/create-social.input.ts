import { InputType, PickType } from '@nestjs/graphql'
import { Social } from '../entities/social.entity'

@InputType()
export class CreateSocialInput extends PickType(
  Social,
  ['description', 'resumeId', 'title', 'url'],
  InputType,
) {}
