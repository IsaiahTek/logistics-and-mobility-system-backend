import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DriversModule } from './drivers/drivers.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { JobsModule } from './jobs/jobs.module';
import { DispatchModule } from './dispatch/dispatch.module';
import { PricingModule } from './pricing/pricing.module';
import { BusinessesModule } from './businesses/businesses.module';
import { TrackingModule } from './tracking/tracking.module';

@Module({
  imports: [UsersModule, DriversModule, VehiclesModule, JobsModule, DispatchModule, PricingModule, BusinessesModule, TrackingModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class V1Module {}
