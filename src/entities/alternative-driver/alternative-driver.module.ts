import { Module } from '@nestjs/common';
import { Database } from 'src/database/database';
import { AlternativeDrivercontroller } from './alternative-driver.controller';
import { alternativeDriverSchema } from './alternative-driver.model';
import { AlternativeDriverRepository } from './alternative-driver.repository';
import { AlternativeDriverService } from './alternative-driver.service';

@Module({
  imports: [Database.features('alternativeDriver',alternativeDriverSchema)],
  controllers: [AlternativeDrivercontroller],
  providers: [AlternativeDriverService, AlternativeDriverRepository],
  exports:[AlternativeDriverService]
})
export class AlternativeDriverModule {}
