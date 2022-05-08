import { Body, Controller, Post, Get } from '@nestjs/common';
import { BranchRoutes } from '../routes';

@Controller(BranchRoutes.BRANCH)
export class BranchController {
  constructor() {}
  @Get()
  async getAllUsers() {
  }
  @Post()
  async createUser(@Body() body) {
  }
}
