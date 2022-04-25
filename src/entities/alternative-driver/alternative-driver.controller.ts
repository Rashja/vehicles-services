import { Body, Controller, Post, Get, Param } from '@nestjs/common';
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
  async getAllAlternativeDrivers(): Promise<IAlternativeDriver[]> {
    return await this.alternativeDriverService.getAllAlternativeDrivers();
  }

  @Get(AlternativeDriverRoutes.LICENSE)
  async findDriverByLicense(@Param('license') license: string) {
    return await this.alternativeDriverService.findDriverByLicense(license);
  }

  @Post()
  async createAlternativeDriver(
    @Body() createAlternativeDriverDto: CreateAlternativeDriverDto,
  ): Promise<IAlternativeDriver> {
    return await this.alternativeDriverService.createAlternativeDriver(
      createAlternativeDriverDto,
    );
  }
}
