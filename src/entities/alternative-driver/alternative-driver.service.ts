import { Injectable, NotFoundException } from '@nestjs/common';
import { IAlternativeDriver } from './alternative-driver.model';
import { AlternativeDriverResponse } from './alternative-driver.model';
import { AlternativeDriverRepository } from './alternative-driver.repository';
import { CreateAlternativeDriverDto } from './dto/alternative-driver.dto';

@Injectable()
export class AlternativeDriverService {
  alternativeDriverResponse: AlternativeDriverResponse =
    new AlternativeDriverResponse();

  constructor(
    private readonly alternativeDriverRepository: AlternativeDriverRepository,
  ) {}

  async getAllAlternativeDrivers(): Promise<IAlternativeDriver[]> {
    const allDrivers =
      await this.alternativeDriverRepository.getAllAlternativeDrivers();
    return allDrivers.map((driver) =>
      this.alternativeDriverResponse.getAlternativeDriver(driver),
    );
  }

  async findDriverByLicense(license: string): Promise<IAlternativeDriver> {
    let driver;

    try {
      const rowAlternativeDriver =
        await this.alternativeDriverRepository.findDriverByLicense(license);
      if (rowAlternativeDriver) {
        driver =
          this.alternativeDriverResponse.getAlternativeDriver(
            rowAlternativeDriver,
          );
      }
    } catch (error) {
      throw new NotFoundException(`Not found driver by license "${license}"`);
    }
    if (!driver) {
      throw new NotFoundException(
        `Not found driver by license: "${license}"`,
      );
    }
    return driver;
  }

  async createAlternativeDriver(
    createAlternativeDriverDto: CreateAlternativeDriverDto,
  ) {
    const driver = await this.alternativeDriverRepository.findDriverByLicense(
      createAlternativeDriverDto.license,
    );
    
    if (driver) {
      throw new NotFoundException(
        `This driver: ${createAlternativeDriverDto.license} does already exist.`,
      );
    }
    try {
      const rowDriver =
        await this.alternativeDriverRepository.createAlternativeDriver(
          createAlternativeDriverDto,
        );
      return this.alternativeDriverResponse.getAlternativeDriver(rowDriver);
    } catch (error) {
      throw new NotFoundException(
        `Invalid ID : ${createAlternativeDriverDto.license}`,
      );
    }
  }
}
