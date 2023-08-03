import { Injectable } from '@nestjs/common'
import { FindManyUrlArgs, FindUniqueUrlArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateUrlInput } from './dto/create-url.input'
import { UpdateUrlInput } from './dto/update-url.input'

@Injectable()
export class UrlsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUrlInput: CreateUrlInput) {
    return this.prisma.url.create({
      data: createUrlInput,
    })
  }

  findAll(args: FindManyUrlArgs) {
    return this.prisma.url.findMany(args)
  }

  findOne(args: FindUniqueUrlArgs) {
    return this.prisma.url.findUnique(args)
  }

  update(updateUrlInput: UpdateUrlInput) {
    const { id, ...data } = updateUrlInput
    return this.prisma.url.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueUrlArgs) {
    return this.prisma.url.delete(args)
  }
}
