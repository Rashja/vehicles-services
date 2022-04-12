import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UsersSchema } from './user.model'
import { Database } from 'src/database/database';


@Module({
  imports: [Database.features('User',UsersSchema)],
  controllers: [Usercontroller],
  providers: [UserService, UserRepository],
  exports:[UserService],
})

export class UserModule {}
