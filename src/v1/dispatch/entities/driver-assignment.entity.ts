import { Driver } from 'src/v1/drivers/entities/driver.entity';
import { Job } from 'src/v1/jobs/entities/job.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity('driver_assignments')
export class DriverAssignment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Job)
  job: Job;

  @ManyToOne(() => Driver)
  driver: Driver;

  @Column({ default: 'pending' })
  status: 'pending' | 'accepted' | 'rejected';

  @Column({ nullable: true })
  acceptedAt: Date;
}
