import { Module } from '@nestjs/common';
import { Database } from 'src/database/database';
import { BranchModule } from '../branch/branch.module';
import { ServiceController } from './service.controller';
import { serviceSchema } from './service.model';
import { ServiceRepository } from './service.repository';
import { ServService } from './service.service';

@Module({
  imports: [Database.features('service', serviceSchema), BranchModule],
  controllers: [ServiceController],
  providers: [ServService,ServiceRepository],
})
export class ServiceModule {}
