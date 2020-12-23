import { Teacher } from "src/teacher/teacher.entity";
import { Course } from "src/course/course.entity";

export class CreateassignCourseDto {
  teacher: Teacher; 
  course: Course;
  // userId: string;
  // lastName:string;
  // firstName:string;
}
