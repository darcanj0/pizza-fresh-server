import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUrl, Matches } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({
    description: 'user email (must be unique)',
    example: 'name@example.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'real name of the user',
    example: 'Daniel',
  })
  user_name: string;

  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
    message:
      'Your password is too weak. User 8 characters at least, 1 lower case, 1 upper case, a number and a special character',
  })
  @ApiProperty({
    description: `At least 1 lowercase alphabetical\nat least 1 uppercase alphabetical\nat least 1 numeric\none special character`,
    example: 'Abcdef@1',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'password confirmation',
    example: 'Abcdef@1',
  })
  confirm_password: string;

  @IsUrl()
  @ApiProperty({
    description: 'a photo for the user profile',
    example: 'https://wallpaperaccess.com/full/6999296.jpg',
  })
  image: string;
}
