import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BranchService } from '../branch/branch.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { IService, ServiceResponse } from './service.model';
import { ServiceRepository } from './service.repository';

@Injectable()
export class ServService {
  serviceResponse: ServiceResponse = new ServiceResponse();
  constructor(
    private readonly serviceRepository: ServiceRepository,
    private readonly barnchService: BranchService,
  ) {}

  async getAllServices(): Promise<IService[]> {
    const allServices = await this.serviceRepository.getAllServices();
    return allServices.map((service) =>
      this.serviceResponse.getService(service),
    );
  }

  async findServicesByBranchUuid(branchUuid: string): Promise<IService[]> {
    let services;

    try {
      const rowServices = await this.serviceRepository.findServicesByBranchUuid(
        branchUuid,
      );
      if (rowServices) {
        services = rowServices.map((service) =>
          this.serviceResponse.getService(service),
        );
      }
    } catch (error) {
      throw new NotFoundException(
        `Not found service by branhcUuid "${branchUuid}"`,
      );
    }
    if (!services) {
      throw new NotFoundException(
        `Not found service by branhcUuid "${branchUuid}"`,
      );
    }
    return services;
  }

  async createService(createServiceDto: CreateServiceDto): Promise<IService> {
    try {
      const branch = await this.barnchService.findBranchById(
        createServiceDto.branchUuid,
      );
      if (!branch) {
        throw new NotFoundException(
          `This branch: ${createServiceDto.branchUuid} does not exist.`,
        );
      }
      const rowService = await this.serviceRepository.createService(
        createServiceDto,
      );
      return this.serviceResponse.getService(rowService);
    } catch (error) {
      throw new NotFoundException(
        `Invalid ID : ${createServiceDto.branchUuid}`,
      );
    }
  }
}
