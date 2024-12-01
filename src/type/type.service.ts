import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeDto, EditTypeDto } from './dto';

@Injectable()
export class TypeService {
  constructor(private prisma: PrismaService) {}

  getTypes() {
    return this.prisma.type.findMany({
      where: {},
    });
  }

  getTypeById(postId: number) {
    return this.prisma.type.findFirst({
      where: {
        id: postId,
      },
    });
  }

  async createType(dto: CreateTypeDto) {
    const type = await this.prisma.type.create({
      data: {
        ...dto,
      },
    });

    return type;
  }

  async editTypeById(typeId: number, dto: EditTypeDto) {
    return this.prisma.type.update({
      where: {
        id: typeId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteTypeById(typeId: number) {
    // const type =
    //   await this.prisma.type.findUnique({
    //     where: {
    //       id: typeId,
    //     },
    //   });

    // // check if user owns the bookmark
    // if (!post || post.userId !== userId)
    //   throw new ForbiddenException(
    //     'Access to resources denied',
    //   );

    await this.prisma.post.delete({
      where: {
        id: typeId,
      },
    });
  }
}
