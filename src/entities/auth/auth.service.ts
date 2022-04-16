import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

import * as password from 'password-hash-and-salt';
import * as jwt from 'jsonwebtoken';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(loginDto: LoginDto) {

    const user = await this.userService.findUserByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException(`${loginDto.email} does not exist`);
    }
    
    return new Promise((resolve, rejects) => {
      password(loginDto.password).verifyAgainst(
        user.password,
        (err, verified) => {
          if (!verified) {
            rejects(new UnauthorizedException());
          }
          const authJwtToken = jwt.sign(
            { email: loginDto.email },
            process.env.DATABASE_JWT_SECRET,
          );
          resolve({ authJwtToken });
        },
      );
    });
  }
}
