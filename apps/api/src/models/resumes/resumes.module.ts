import { Module } from '@nestjs/common'
import { ResumesService } from './resumes.service'
import { ResumesResolver } from './resumes.resolver'

@Module({
  providers: [ResumesResolver, ResumesService],
  exports: [ResumesService],
})
export class ResumesModule {}
