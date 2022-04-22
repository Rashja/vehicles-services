import { Controller, Post, Get } from '@nestjs/common';
import { AlternativeDriverRoutes } from '../routes';

@Controller(AlternativeDriverRoutes.ALTERNATIVE_DRIVER)
export class AlternativeDrivercontroller {
  constructor() {}
  @Get()
  async getAllAlternativeDrivers() {
    
  }
  @Post()
  async createAlternativeDriver() {
    
  }
}
