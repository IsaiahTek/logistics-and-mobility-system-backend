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