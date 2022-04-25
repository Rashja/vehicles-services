import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { assignAlternativeDriverDto } from './dto/assign-alternative-driver.dto';
import { createVehicleDto } from './dto/create-vehicle.dto';
import { IVehicle, VehicleResponse } from './vehicle.model';
import { VehicleRepository } from './vehicle.repository';

@Injectable()
export class VehicleService {
  vehicleResponse: VehicleResponse = new VehicleResponse();
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  async getAllVehicles(): Promise<IVehicle[]> {
    const allVehicles = await this.vehicleRepository.getAllVehicles();
    return allVehicles.map((vehicle) =>
      this.vehicleResponse.getVehicle(vehicle),
    );
  }

  async findVehicleByNumberplate(numberplate: string): Promise<IVehicle> {
    let vehicle;

    try {
      const rowVehicle = await this.vehicleRepository.findVehicleByNumberplate(
        numberplate,
      );
      if(rowVehicle){
        vehicle = this.vehicleResponse.getVehicle(rowVehicle);
      }
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

  async assignAlternativeDriver(
    alternativeDrivers: assignAlternativeDriverDto,
  ) {
    try {
      const { alternativeDiversId, numberplate } = alternativeDrivers;
      const vehicle = await this.findVehicleByNumberplate(numberplate);

      if (vehicle.alternativeDrivers.includes(alternativeDiversId)) {
        throw new BadRequestException(
          `This driver: ${alternativeDiversId} has already assigned`,
        );
      }
      return this.vehicleRepository.assignAlternativeDriver(alternativeDrivers);
    } catch (error) {
      throw new BadRequestException(
        `This driver: ${alternativeDrivers.alternativeDiversId} has already assigned`,
      );
    }
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
    try {
      const rowVehicle = await this.vehicleRepository.createVehicle(
        createVehicleDto,
      );
      return this.vehicleResponse.getVehicle(rowVehicle);
    } catch (error) {
      throw new NotFoundException(`Invalid ID : ${createVehicleDto.owner}`);
    }
  }
}
