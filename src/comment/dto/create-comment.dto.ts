import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsInt
  } from 'class-validator';
  
  export class CreateCommentDto {

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsInt()
    @IsNotEmpty()
    postId: number;
  }