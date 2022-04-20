import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { createVehicleDto } from './dto/create-vehicle.dto';
import { assignAlternativeDriverDto } from './dto/assign-alternative-driver.dto';
import { VehicleRoutes } from '../routes';
import { VehicleService } from './vehicle.service';

@Controller(VehicleRoutes.VEHICLE)
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async getAllVehicles() {
    return await this.vehicleService.getAllVehicles();
  }

  @Get(VehicleRoutes.NUMBERPLATE)
  async findVehicleByNumberplate(@Param('numberplate') numberplate: string) {
    return await this.vehicleService.findVehicleByNumberplate(numberplate);
  }

  @Post(VehicleRoutes.ASSIGN_ALTERNATIVE_DRIVERS)
  async assignAlternativeDriver(@Body() alternativeDrivers:assignAlternativeDriverDto) {
    return await this.vehicleService.assignAlternativeDriver(alternativeDrivers);
  }

  @Post()
  async createVehicle(@Body() createVehicleDto: createVehicleDto) {
    return await this.vehicleService.createVehicle(createVehicleDto);
  }
  
}
