import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { GetUser } from '../auth/decorators';
  import { JwtGuard } from '../auth/guard';
  import { CommentService } from './comment.service';
  import {
    CreateCommentDto,
    EditCommentDto,
  } from './dto';

@UseGuards(JwtGuard)
@Controller('comments')
export class CommentController {
    constructor(
        private commentService: CommentService,
      ) {}
    
      @Get()
      getComments() {
        return this.commentService.getComments(
        );
      }

      @Get('/post/:id')
      getCommentsByPostId(@Param('id', ParseIntPipe) postId: number,) {
        console.log(postId);    
        return this.commentService.getCommentsByPostId(
          postId,
        );
      }
    
      @Get(':id')
      getPostById(
        @Param('id', ParseIntPipe) commentId: number,
      ) {
        return this.commentService.getCommentById(
          commentId,
        );
      }
    
      @Post()
      createPost(
        @GetUser('id') userId: number,
        @Body() dto: CreateCommentDto,
      ) {
        return this.commentService.createComment(
          userId,
          dto,
        );
      }
    
      @Patch(':id')
      editPostById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) commentId: number,
        @Body() dto: EditCommentDto,
      ) {
        return this.commentService.editCommentById(
          userId,
          commentId,
          dto,
        );
      }
    
      @HttpCode(HttpStatus.NO_CONTENT)
      @Delete(':id')
      deletePostById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) commentId: number,
      ) {
        return this.commentService.deleteCommentById(
          userId,
          commentId,
        );
      }
}
