import { Controller, Post, Get } from '@nestjs/common';
import { UserRoutes } from '../routes';

@Controller(UserRoutes.USER)
export class VehicleController {
  constructor() {}
  @Get()
  async getAllVehicles() {
  }
  @Post()
  async createVehicle() {
  }
}

