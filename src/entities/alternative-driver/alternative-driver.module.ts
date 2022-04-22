import { Module } from '@nestjs/common';
import { AlternativeDrivercontroller } from './alternative-driver.controller';
import { AlternativeDriverService } from './alternative-driver.service';


@Module({
  controllers: [AlternativeDrivercontroller],
  providers: [AlternativeDriverService],
})

export class AlternativeDriverModule {}
