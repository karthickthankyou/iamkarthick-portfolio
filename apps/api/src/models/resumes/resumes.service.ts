import { Injectable } from '@nestjs/common'
import { FindManyResumeArgs, FindUniqueResumeArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateResumeInput } from './dto/create-resume.input'
import { UpdateResumeInput } from './dto/update-resume.input'

@Injectable()
export class ResumesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createResumeInput: CreateResumeInput) {
    return this.prisma.resume.create({
      data: createResumeInput,
    })
  }

  findAll(args: FindManyResumeArgs) {
    return this.prisma.resume.findMany(args)
  }

  findOne(args: FindUniqueResumeArgs) {
    return this.prisma.resume.findUnique(args)
  }

  update(updateResumeInput: UpdateResumeInput) {
    const { id, ...data } = updateResumeInput
    return this.prisma.resume.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueResumeArgs) {
    return this.prisma.resume.delete(args)
  }
}
