@Entity('pricing_rules')
export class PricingRule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  jobType: string;

  @Column()
  vehicleType: string;

  @Column('decimal')
  baseFare: number;

  @Column('decimal')
  perKmRate: number;

  @Column('decimal')
  perMinuteRate: number;

  @Column('decimal', { default: 1 })
  surgeMultiplier: number;
}