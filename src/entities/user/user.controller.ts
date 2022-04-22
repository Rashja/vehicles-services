import { Body, Controller, Post, Get } from '@nestjs/common';
import { IUser } from '../user/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UserRoutes } from '../routes';

@Controller(UserRoutes.USER)
export class Usercontroller {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUsers(): Promise<IUser[]> {
    return await this.userService.getAllUsers();
  }
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return await this.userService.createUser(createUserDto);
  }
}
