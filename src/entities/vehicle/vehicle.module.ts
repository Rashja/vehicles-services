import { Module } from '@nestjs/common';
import { Database } from 'src/database/database';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';


@Module({
  controllers: [VehicleController],
  providers:[VehicleService]
})

export class VehicleModule {}

