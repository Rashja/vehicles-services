import { Module } from '@nestjs/common';
import { BranchModule } from '../branch/branch.module';
import { ServiceController } from './service.controller';
import { ServService } from './service.service';


@Module({
  imports:[BranchModule],
  controllers: [ServiceController],
  providers:[ServService]
})

export class ServiceModule {}
