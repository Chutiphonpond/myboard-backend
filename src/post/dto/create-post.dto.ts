import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsInt
  } from 'class-validator';
  
  export class CreatePostDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
    
    @IsInt()
    @IsNotEmpty()
    typeId: number;
  }