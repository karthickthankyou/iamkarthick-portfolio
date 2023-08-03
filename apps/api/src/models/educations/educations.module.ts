import { Module } from '@nestjs/common'
import { EducationsService } from './educations.service'
import { EducationsResolver } from './educations.resolver'

@Module({
  providers: [EducationsResolver, EducationsService],
  exports: [EducationsService],
})
export class EducationsModule {}
