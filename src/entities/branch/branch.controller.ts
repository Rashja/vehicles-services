import { Body, Controller, Post, Get } from '@nestjs/common';
import { BranchRoutes } from '../routes';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';

@Controller(BranchRoutes.BRANCH)
export class BranchController {
  constructor(private readonly branchService: BranchService) {}
  @Get()
  async getAllBranches(): Promise<IBranch[]> {
    return await this.branchService.getAllBranches();
  }
  @Post()
  async createBranch(@Body() createBranchDto: CreateBranchDto): Promise<IBranch> {
    return await this.branchService.createBranch(createBranchDto);
  }
}
