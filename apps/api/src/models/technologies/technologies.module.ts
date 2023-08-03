import { Module } from '@nestjs/common'
import { TechnologiesService } from './technologies.service'
import { TechnologiesResolver } from './technologies.resolver'

@Module({
  providers: [TechnologiesResolver, TechnologiesService],
  exports: [TechnologiesService],
})
export class TechnologiesModule {}
