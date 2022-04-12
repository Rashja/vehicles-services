import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { IUser } from './user.model';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: createUserDto): Promise<IUser> {
    return new Promise((resolve, reject) => {
      reject('something is wrong')
      resolve(this.userRepository.createUser(createUserDto))
    });
  }
}
