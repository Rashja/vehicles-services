import { Module } from '@nestjs/common';
import { Database } from 'src/database/database';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { VehicleRepository } from './vehicle.repository';
import { VehicleSchema } from './vehicle.model';


@Module({
  imports: [Database.features('vehicle',VehicleSchema)],
  controllers: [VehicleController],
  providers:[VehicleService,VehicleRepository]
})

export class VehicleModule {}

