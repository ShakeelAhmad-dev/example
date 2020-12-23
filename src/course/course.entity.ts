import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
// import { User } from "../users/user.entity";

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseName: string;

  //   @OneToOne((type) => User)
  //   @JoinColumn()
  //   user: User;
}
