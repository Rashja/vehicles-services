import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './entities/user/user.module';
import { Database } from './database/database';
import { ConfigModule } from '@nestjs/config';
import { GetUserMiddleware } from './middlewares/get-user.middleware';
import { Usercontroller } from './entities/user/user.controller';
import { AuthModule } from './entities/auth/auth.module';
import { VehicleModule } from './entities/vehicle/vehicle.module';
import { AlternativeDriverModule } from './entities/alternative-driver/alternative-driver.module';
import { BranchModule } from './entities/branch/branch.module';
import { ServiceModule } from './entities/service/service.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    AlternativeDriverModule,
    VehicleModule,
    BranchModule,
    ServiceModule,
    Database.root()
  ],
})

export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetUserMiddleware).forRoutes(Usercontroller)
  }
}