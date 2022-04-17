import { Module } from '@nestjs/common';
import { Database } from 'src/database/database';
import { VehicleController } from './vehicle.controller';


@Module({
  controllers: [VehicleController],
})

export class VehicleModule {}

