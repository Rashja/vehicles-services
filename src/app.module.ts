import {  Module } from '@nestjs/common';
import { UserModule } from './entities/user/user.module';
import { Database } from './database/database';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    Database.root()
  ],
})
export class AppModule {}