@Entity('job_stops')
export class JobStop {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Job, job => job.stops)
  job: Job;

  @Column()
  address: string;

  @Column({ type: 'decimal' })
  latitude: number;

  @Column({ type: 'decimal' })
  longitude: number;

  @Column()
  sequenceOrder: number;

  @Column()
  stopType: 'pickup' | 'dropoff' | 'waypoint';
}