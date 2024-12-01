import {
    IsNotEmpty,
    IsOptional,
  } from 'class-validator';
  
  export class EditTypeDto {
    @IsOptional()
    @IsNotEmpty()
    name: string;
  }