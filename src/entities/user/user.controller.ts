import { Body, Controller, Post } from '@nestjs/common';
import { IUser } from '../user/user.model';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UserRoutes } from '../routes';

@Controller(UserRoutes.USER)
export class Usercontroller {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createUserDto: createUserDto): Promise<IUser> {
    return await this.userService.createUser(createUserDto);
  }
}
 