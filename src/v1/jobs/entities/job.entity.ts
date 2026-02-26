export enum JobType {
  RIDE = 'ride',
  CARPOOL = 'carpool',
  DELIVERY = 'delivery',
}

export enum JobStatus {
  CREATED = 'created',
  MATCHED = 'matched',
  ACCEPTED = 'accepted',
  ENROUTE = 'enroute',
  ARRIVED = 'arrived',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: JobType })
  jobType: JobType;

  @Column({ type: 'enum', enum: JobStatus, default: JobStatus.CREATED })
  status: JobStatus;

  @ManyToOne(() => User)
  requester: User;

  @Column({ type: 'decimal', nullable: true })
  estimatedPrice: number;

  @Column({ type: 'decimal', nullable: true })
  finalPrice: number;

  @OneToMany(() => JobStop, stop => stop.job)
  stops: JobStop[];
}