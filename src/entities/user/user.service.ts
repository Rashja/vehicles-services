import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUser } from '../user/user.model';
import { createUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: createUserDto): Promise<IUser> {
    return new Promise((resolve, reject) => {
        const result=this.userRepository.createUser(createUserDto)
        resolve(result);
    });
  }
}
