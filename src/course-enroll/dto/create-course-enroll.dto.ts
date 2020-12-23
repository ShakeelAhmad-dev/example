// import { Student } from "src/students/student.entity";
// import { Student } from "src/users/user.entity";
import { Teacher } from "src/teacher/teacher.entity";
import { Course } from "src/course/course.entity";
import { Student } from "src/students/student.entity";
// import { User } from "src/users/user.entity";
// import { User } from "src/users/user.entity";

export class CreateCourseEnrollDto {
  // courseName: string;
  student: Student;
  teacher: Teacher;
  course: Course;
  // userId: string;
  // lastName:string;
  // firstName:string;
}
