import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
// import { User } from "../users/user.entity";
import { Student } from "../students/student.entity";
import { Course } from "../course/course.entity";
import { Teacher } from "src/teacher/teacher.entity";

@Entity()
export class CourseEnroll {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => Course)
  @JoinColumn()
  course: Course;

  @OneToOne((type) => Student)
  @JoinColumn()
  student: Student;

  @OneToOne((type) => Teacher)
  @JoinColumn()
  teacher: Teacher;
}
