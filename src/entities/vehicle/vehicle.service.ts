import { Injectable, NotFoundException } from '@nestjs/common';
import { createVehicleDto } from './dto/create-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor() {}

  async getAllVehicles() {
      return 'All  vehicles'
  }

  async createVehicle(createUserDto: createVehicleDto) {
    return 'create vehicle'
  }
}

