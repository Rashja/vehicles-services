import { Body, Controller, Post, Get } from '@nestjs/common';
import { ServiceRoutes } from '../routes';
import { IService } from './service.model';
import { ServService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller(ServiceRoutes.SERVICE)
export class ServiceController {
  constructor(private readonly servService: ServService) {}
  @Get()
  async getAllServices(): Promise<IService[]> {
    return await this.servService.getAllBranches();
  }
  @Post()
  async createService(@Body() createServiceDto: CreateServiceDto): Promise<IService> {
    return await this.servService.createService(createServiceDto);
  }
}
