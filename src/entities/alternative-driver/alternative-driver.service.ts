import { Injectable, NotFoundException } from '@nestjs/common';
import { IAlternativeDriver } from './alternative-driver.model';
import { AlternativeDriverResponse } from './alternative-driver.model';
import { CreateAlternativeDriverDto } from './dto/alternative-driver.dto';

@Injectable()
export class AlternativeDriverService {
  userResponse: AlternativeDriverResponse = new AlternativeDriverResponse();
  constructor() {}

  async getAllAlternativeDrivers() {}

  async createAlternativeDriver(
    createAlternativeDriverDto: CreateAlternativeDriverDto,
  ) {}
}
