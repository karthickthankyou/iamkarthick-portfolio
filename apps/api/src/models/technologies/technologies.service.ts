import { Injectable } from '@nestjs/common'
import {
  FindManyTechnologyArgs,
  FindUniqueTechnologyArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateTechnologyInput } from './dto/create-technology.input'
import { UpdateTechnologyInput } from './dto/update-technology.input'

@Injectable()
export class TechnologiesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTechnologyInput: CreateTechnologyInput) {
    return this.prisma.technology.create({
      data: createTechnologyInput,
    })
  }

  findAll(args: FindManyTechnologyArgs) {
    return this.prisma.technology.findMany(args)
  }

  findOne(args: FindUniqueTechnologyArgs) {
    return this.prisma.technology.findUnique(args)
  }

  update(updateTechnologyInput: UpdateTechnologyInput) {
    const { id, ...data } = updateTechnologyInput
    return this.prisma.technology.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueTechnologyArgs) {
    return this.prisma.technology.delete(args)
  }
}
