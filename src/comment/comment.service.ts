import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto, EditCommentDto } from './dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  getComments() {
    return this.prisma.comment.findMany({
      where: {},
    });
  }

  getCommentsByPostId(postId: number) {
    return this.prisma.comment.findMany({
      where: {
        postId: postId,
      },
    });
  }

  getCommentById(comment: number) {
    return this.prisma.comment.findFirst({
      where: {
        id: comment,
      },
    });
  }

  async createComment(userId: number, dto: CreateCommentDto) {
    console.log(userId);
    const comment = await this.prisma.comment.create({
      data: {
        userId,
        ...dto,
      },
    });

    return comment;
  }

  async editCommentById(
    userId: number,
    commentId: number,
    dto: EditCommentDto,
  ) {
    // get the bookmark by id
    const comment = await this.prisma.post.findUnique({
      where: {
        id: commentId,
      },
    });

    // check if user owns the bookmark
    if (!comment || comment.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    return this.prisma.post.update({
      where: {
        id: commentId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteCommentById(userId: number, commentId: number) {
    const post = await this.prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    // check if user owns the bookmark
    if (!post || post.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    await this.prisma.comment.delete({
      where: {
        id: commentId,
      },
    });
  }
}
