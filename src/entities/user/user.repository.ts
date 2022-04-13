import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDto } from './dto/create-user.dto';
import { IUser } from './user.model';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async getAllUsers(): Promise<IUser[]> {
    try {
      return this.userModel.find({}).exec();
    } catch (error) {
      throw new Error(error)
    }
  }

  async findUserByEmail(email: string): Promise<IUser> {
    try {
      return this.userModel.findOne({ email });
    } catch (error) {
      throw new Error(error)
    }
  }

  async createUser(createUserDto: createUserDto): Promise<IUser> {
    try {
      const newUser = new this.userModel({
        ...createUserDto,
      });

      const result = newUser.save();

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
