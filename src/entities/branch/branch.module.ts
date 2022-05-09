import { Module } from '@nestjs/common';
import { Database } from 'src/database/database';
import { BranchController } from './branch.controller';
import { branchSchema } from './branch.model';
import { BranchRepository } from './branch.repository';
import { BranchService } from './branch.service';


@Module({
  imports: [Database.features('branch',branchSchema)],
  controllers: [BranchController],
  providers:[BranchService,BranchRepository]
})

export class BranchModule {}
