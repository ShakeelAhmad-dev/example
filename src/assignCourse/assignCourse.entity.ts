import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
// import { User } from "../users/user.entity";
import { Course } from "../course/course.entity";
import { Teacher } from "../teacher/teacher.entity";

@Entity()
export class assignCourse {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // courseName: string;

  @OneToOne((type) => Course)
  @JoinColumn()
  course: Course;

  @OneToOne((type) => Teacher)
  @JoinColumn()
  teacher: Teacher;
}
