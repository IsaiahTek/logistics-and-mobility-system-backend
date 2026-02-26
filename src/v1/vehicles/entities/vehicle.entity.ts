@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Driver)
  driver: Driver;

  @Column()
  vehicleType: 'bike' | 'car' | 'van' | 'truck';

  @Column()
  plateNumber: string;

  @Column()
  passengerCapacity: number;

  @Column()
  weightCapacityKg: number;
}
