import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { IService } from './service.model';

@Injectable()
export class ServiceRepository {
  constructor(
    @InjectModel('service') private readonly serviceModel: Model<IService>,
  ) {}

  async getAllServices(): Promise<IService[]> {
    try {
      return this.serviceModel.find({}).exec();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findServicesByBranchUuid(branchUuid: string): Promise<IService[]> {
    try {
      return this.serviceModel.find({ branchUuid });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createService(createServiceDto: CreateServiceDto): Promise<IService> {
    try {
      const newService = new this.serviceModel({
        ...createServiceDto,
      });

      const result = newService.save();

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
