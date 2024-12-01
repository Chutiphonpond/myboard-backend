import {
    IsNotEmpty,
    IsOptional,
  } from 'class-validator';
  
  export class EditPostDto {
    @IsOptional()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsNotEmpty()
    content: string;
  }