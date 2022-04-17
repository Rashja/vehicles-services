import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createVehicleDto } from './dto/create-vehicle.dto';
import { IVehicle } from './vehicle.model';

@Injectable()
export class VehicleRepository {
  constructor(
    @InjectModel('vehicle') private readonly vehicleModel: Model<IVehicle>,
  ) {}

  async getAllVehicles(): Promise<IVehicle[]> {
    try {
      return this.vehicleModel.find({}).exec();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findVehicleByNumberplate(numberplate: string): Promise<IVehicle> {
    try {
      return this.vehicleModel.findOne({ numberplate });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createVehicle(createVehicleDto: createVehicleDto): Promise<IVehicle> {
    try {
      const newVehicle = new this.vehicleModel({
        ...createVehicleDto,
      });

      const result = newVehicle.save();

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
