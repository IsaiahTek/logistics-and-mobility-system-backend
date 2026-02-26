import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { DriversModule } from './v1/drivers/drivers.module';

@Module({
  imports: [V1Module, DriversModule],
  providers: [],
})
export class AppModule {}
