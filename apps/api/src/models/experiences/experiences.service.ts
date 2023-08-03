import { Injectable } from '@nestjs/common'
import {
  FindManyExperienceArgs,
  FindUniqueExperienceArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateExperienceInput } from './dto/create-experience.input'
import { UpdateExperienceInput } from './dto/update-experience.input'

@Injectable()
export class ExperiencesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createExperienceInput: CreateExperienceInput) {
    return this.prisma.experience.create({
      data: createExperienceInput,
    })
  }

  findAll(args: FindManyExperienceArgs) {
    return this.prisma.experience.findMany(args)
  }

  findOne(args: FindUniqueExperienceArgs) {
    return this.prisma.experience.findUnique(args)
  }

  update(updateExperienceInput: UpdateExperienceInput) {
    const { id, ...data } = updateExperienceInput
    return this.prisma.experience.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueExperienceArgs) {
    return this.prisma.experience.delete(args)
  }
}
