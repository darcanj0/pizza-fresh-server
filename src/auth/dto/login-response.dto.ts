import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT returned by login',
    example: 'Automatically generated JWT',
  })
  token: string;

  @ApiProperty({
    description: 'Data from the authenticated user',
  })
  user: Partial<User>;
}
