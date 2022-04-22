import { Module } from '@nestjs/common';
import { AlternativeDrivercontroller } from './alternative-driver.controller';


@Module({
  controllers: [AlternativeDrivercontroller],
})

export class AlternativeDriverModule {}
