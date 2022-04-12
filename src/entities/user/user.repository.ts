import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDto } from './dto/create-user.dto';
import { IUser } from './user.model';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async createUser(createUserDto: createUserDto): Promise<IUser> {
    try {
      const newUser = new this.userModel({
        ...createUserDto,
      });

      const result = await newUser.save();

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
