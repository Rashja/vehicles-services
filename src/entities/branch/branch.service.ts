import { Injectable, NotFoundException } from '@nestjs/common';
import { IBranch,BranchResponse } from './branch.model';
import { CreateBranchDto } from './dto/create-branch.dto';
import { BranchRepository } from './branch.repository';

@Injectable()
export class BranchService {
  branchResponse: BranchResponse = new BranchResponse();
  constructor(private readonly branchRepository: BranchRepository) {}

  async getAllBranches() {
    const allBranches = await this.branchRepository.getAllBranches();
    return allBranches.map((branch) => this.branchResponse.getBranch(branch));
  }

  async findBranchById(id: string): Promise<IBranch> {
    let branch;

    try {
      const rowBranch = await this.branchRepository.findBranchById(id);
      
      if(rowBranch){
        branch = this.branchResponse.getBranch(rowBranch);
      }
    } catch (error) {
      throw new NotFoundException(`Not found branch by id "${id}"`);
    }
    if (!branch) {
      throw new NotFoundException(`Not found branch by id "${id}"`);
    }
    return branch;
  }


  async createBranch(
    createBranchDto: CreateBranchDto,
  ) {
    const branch = await this.branchRepository.findBranchByEmail(
      createBranchDto.email,
    );
    
    if (branch) {
      throw new NotFoundException(
        `This branch: ${createBranchDto.email} does already exist.`,
      );
    }
    try {
      const rowBranch =
        await this.branchRepository.createBranch(
          createBranchDto,
        );
      return this.branchResponse.getBranch(rowBranch);
    } catch (error) {
      throw new NotFoundException(
        `Invalid email : ${createBranchDto.email}`,
      );
    }
  }
}

