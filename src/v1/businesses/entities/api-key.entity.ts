import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Business } from './business.entity';

@Entity('api_keys')
export class ApiKey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Business)
  business: Business;

  @Column()
  hashedKey: string;

  @Column({ default: true })
  isActive: boolean;
}
