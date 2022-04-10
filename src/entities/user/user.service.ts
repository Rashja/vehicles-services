import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUser } from '../user/user.model';
import { createUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import * as password from 'password-hash-and-salt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

}
