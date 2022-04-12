import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUser } from '../user/user.model';
import { createUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import * as password from 'password-hash-and-salt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: createUserDto): Promise<IUser> {
    return new Promise((resolve, reject) => {
      password(createUserDto.password).hash((error, hash) => {
        if (error) reject('something went wrong');

        const result = this.userRepository.createUser({
          ...createUserDto,
          password: hash,
        });
        resolve(result);
      });
    });
  }
}
