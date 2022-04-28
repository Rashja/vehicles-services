import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlternativeDriverDto } from './dto/alternative-driver.dto';
import { IAlternativeDriver } from './alternative-driver.model';

@Injectable()
export class AlternativeDriverRepository {
  constructor(
    @InjectModel('alternativeDriver')
    private readonly alternativeDriverModel: Model<IAlternativeDriver>,
  ) {}

  async getAllAlternativeDrivers(ids:string[]): Promise<IAlternativeDriver[]> {
    try {
      return this.alternativeDriverModel.find((ids ? { _id : { $in : ids } } : {})).exec();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findDriverByLicense(license: string): Promise<IAlternativeDriver> {
    try {
      return this.alternativeDriverModel.findOne({ license });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createAlternativeDriver(
    createAlternativeDriverDto: CreateAlternativeDriverDto,
  ): Promise<IAlternativeDriver> {
    try {
      const newAlternativeDriver = new this.alternativeDriverModel({
        ...createAlternativeDriverDto,
      });

      const result = newAlternativeDriver.save();

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
