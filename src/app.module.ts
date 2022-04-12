import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './entities/user/user.module';
import { Database } from './database/database';
import { ConfigModule } from '@nestjs/config';
import { GetUserMiddleware } from './middlewares/get-user.middleware';
import { Usercontroller } from './entities/user/user.controller';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    Database.root()
  ],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetUserMiddleware).forRoutes(Usercontroller)
  }
}