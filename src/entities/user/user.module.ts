import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UsersSchema } from './user.model';

@Module({
  controllers: [Usercontroller],
  providers: [UserService, UserRepository],
  exports:[UserService],
})

export class UserModule {}
