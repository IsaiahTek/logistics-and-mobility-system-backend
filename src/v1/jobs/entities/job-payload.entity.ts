@Entity('job_payloads')
export class JobPayload {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Job)
  @JoinColumn()
  job: Job;

  @Column({ nullable: true })
  passengerCount: number;

  @Column({ nullable: true })
  packageWeightKg: number;

  @Column({ nullable: true })
  packageDescription: string;
}