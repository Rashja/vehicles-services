import { Body, Controller, Post, Get } from '@nestjs/common';
import { createVehicleDto } from './dto/create-vehicle.dto';
import { VehicleRoutes } from '../routes';
import { VehicleService } from './vehicle.service';

@Controller(VehicleRoutes.VEHICLE)
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}
  @Get()
  async getAllVehicles() {
    return await this.vehicleService.getAllVehicles();
  }
  @Post()
  async createUser(@Body() createVehicleDto: createVehicleDto) {
    return await this.vehicleService.createVehicle(createVehicleDto);
  }
}

