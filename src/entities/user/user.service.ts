import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from '../user/user.model';
import { createUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import * as password from 'password-hash-and-salt';
import { UserResponse } from '../user/user.model';

@Injectable()
export class UserService {
  userResponse: UserResponse = new UserResponse();
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers() {
    const allUsers = await this.userRepository.getAllUsers();
    return allUsers.map((user) => this.userResponse.getUser(user));
  }

  async findUserByEmail(email: string): Promise<IUser> {
    let user;

    try {
      user = await this.userRepository.findUserByEmail(email);
    } catch (error) {
      throw new NotFoundException(`Not found user by email "${email}"`);
    }
    if (!user) {
      throw new NotFoundException(`Not found user by email "${email}"`);
    }
    return user;
  }

  async createUser(createUserDto: createUserDto): Promise<IUser> {
    const email = await this.userRepository.findUserByEmail(
      createUserDto.email,
    );
    return new Promise((resolve, reject) => {
      if (email) {
        throw new NotFoundException(
          `This email: ${createUserDto.email} does already exist, Try another one`,
        );
      }
      password(createUserDto.password).hash((error, hash) => {
        if (error) reject('something went wrong');

        const result = this.userRepository.createUser({
          ...createUserDto,
          password: hash,
        }).then(response => this.userResponse.getUser(response));
        
        resolve(result);
      });
    });
  }
}
