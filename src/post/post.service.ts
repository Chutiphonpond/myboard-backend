import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto, EditPostDto } from './dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  getPosts() {
    return this.prisma.post.findMany({
      where: {},
    });
  }

  getPostById(userId: number, post: number) {
    return this.prisma.post.findFirst({
      where: {
        id: post,
        userId,
      },
    });
  }

  async createPost(userId: number, dto: CreatePostDto) {
    console.log(userId);
    const post = await this.prisma.post.create({
      data: {
        userId,
        ...dto,
      },
    });

    return post;
  }

  async editPostById(userId: number, postId: number, dto: EditPostDto) {
    // get the Post by id
    const post = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    // check if user owns the Post
    if (!post || post.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    return this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deletePostById(userId: number, postId: number) {
    const post = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post || post.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    await this.prisma.post.delete({
      where: {
        id: postId,
      },
    });
  }
}
