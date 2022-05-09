import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBranchDto } from './dto/create-branch.dto';

@Injectable()
export class BranchRepository {
  constructor(
    @InjectModel('branch')
    private readonly branchModel: Model<IBranch>,
  ) {}

  async getAllBranches(): Promise<IBranch[]> {
    try {
      return this.branchModel.find({}).exec();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findBranchByEmail(email: string): Promise<IBranch> {
    try {
      return this.branchModel.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findBranchById(id: string): Promise<IBranch> {
    try {
      return this.branchModel.findOne({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createBranch(
    createBranchDto: CreateBranchDto,
  ): Promise<IBranch> {
    try {
      const newBranch = new this.branchModel({
        ...createBranchDto,
      });

      const result = newBranch.save();

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}