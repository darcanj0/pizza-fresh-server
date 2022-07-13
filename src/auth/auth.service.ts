import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  private userSelect = {
    id: true,
    email: true,
    user_name: true,
    password: true,
    image: true,
    is_admin: true,
    orders: { select: { id: true, active: true } },
    favorite_products: { select: { id: true, title: true } },
    created_at: true,
    updated_at: true,
  };

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { email, password } = loginDto;
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: this.userSelect,
    });
    if (!user) {
      throw new UnauthorizedException(
        'User email and/or password are incorrect',
      );
    }
    const isHashValid = await bcrypt.compare(password, user.password);
    if (!isHashValid) {
      throw new UnauthorizedException(
        'User email and/or password are incorrect',
      );
    }
    delete user.password;
    return { user, token: this.jwtService.sign({ email, is_admin: user.is_admin }) };
  }
}
