import { Injectable, NotFoundException } from '@nestjs/common';
import { createVehicleDto } from './dto/create-vehicle.dto';
import { IVehicle } from './vehicle.model';
import { VehicleRepository } from './vehicle.repository';

@Injectable()
export class VehicleService {
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  async getAllVehicles(): Promise<IVehicle[]> {
    return await this.vehicleRepository.getAllVehicles();
  }

  async findVehicleByNumberplate(numberplate: string): Promise<IVehicle> {
    let vehicle;

    try {
      vehicle = await this.vehicleRepository.findVehicleByNumberplate(
        numberplate,
      );
    } catch (error) {
      throw new NotFoundException(
        `Not found vehicle by numberplate "${numberplate}"`,
      );
    }
    if (!vehicle) {
      throw new NotFoundException(
        `Not found vehicle by numberplate "${numberplate}"`,
      );
    }
    return vehicle;
  }

  async createVehicle(createVehicleDto: createVehicleDto): Promise<IVehicle> {
    const vehicle = await this.vehicleRepository.findVehicleByNumberplate(
      createVehicleDto.numberplate,
    );
    if (vehicle) {
      throw new NotFoundException(
        `This vehicle: ${createVehicleDto.numberplate} does already exist.`,
      );
    }
    return this.vehicleRepository.createVehicle(createVehicleDto);
  }
}
