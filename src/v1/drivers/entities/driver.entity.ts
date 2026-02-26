import { User } from 'src/v1/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity('drivers')
export class Driver {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  user: User;

  @Column()
  licenseNumber: string;

  @Column({ default: 5.0 })
  rating: number;

  @Column({ default: false })
  isOnline: boolean;

  @Column({ type: 'decimal', nullable: true })
  currentLat: number;

  @Column({ type: 'decimal', nullable: true })
  currentLng: number;
}
