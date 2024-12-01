import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class SignupDto extends AuthDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  picture: string;
}

export class SigninDto {
  @IsString()
  @IsNotEmpty()
  username: string;
}
