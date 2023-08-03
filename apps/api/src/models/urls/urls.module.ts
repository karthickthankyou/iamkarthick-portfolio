import { Module } from '@nestjs/common'
import { UrlsService } from './urls.service'
import { UrlsResolver } from './urls.resolver'

@Module({
  providers: [UrlsResolver, UrlsService],
  exports: [UrlsService],
})
export class UrlsModule {}
