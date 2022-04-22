import { Body, Controller, Post, Get } from '@nestjs/common';
import { IAlternativeDriver } from './alternative-driver.model';
import { CreateAlternativeDriverDto } from './dto/alternative-driver.dto';
import { AlternativeDriverRoutes } from '../routes';
import { AlternativeDriverService } from './alternative-driver.service';

@Controller(AlternativeDriverRoutes.ALTERNATIVE_DRIVER)
export class AlternativeDrivercontroller {
  constructor(
    private readonly alternativeDriverService: AlternativeDriverService,
  ) {}

  @Get()
  async getAllAlternativeDrivers() {
    return await this.alternativeDriverService.getAllAlternativeDrivers;
  }

  @Post()
  async createAlternativeDriver(
    @Body() createAlternativeDriverDto: CreateAlternativeDriverDto,
  ) {
    return await this.alternativeDriverService.createAlternativeDriver(
      createAlternativeDriverDto,
    );
  }
}
