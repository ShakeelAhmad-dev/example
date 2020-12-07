import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../users/user.entity";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registrationNumber: string;

  @OneToOne((type) => User)
  @JoinColumn()
  user: User;
}
