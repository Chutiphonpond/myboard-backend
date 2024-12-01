import {
    IsNotEmpty,
    IsOptional,
  } from 'class-validator';
  
  export class EditCommentDto {
    @IsOptional()
    @IsNotEmpty()
    content: string;
  }