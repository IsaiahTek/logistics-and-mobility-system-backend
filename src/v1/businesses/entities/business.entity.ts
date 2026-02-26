import { User } from 'src/v1/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity('businesses')
export class Business {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  owner: User;

  @Column()
  name: string;

  @Column()
  apiKey: string;

  @Column({ nullable: true })
  webhookUrl: string;
}
