import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
// import { User } from "src/users/user.entity";
import { Course } from "src/course/course.entity";
import { Teacher } from "src/teacher/teacher.entity";
import { Student } from "src/students/student.entity";
import { CousreEnrollController } from "./course-enroll.controller";
import { CourseEnroll } from "./course-enroll.entity";
import { CourseEnrollService } from "./course-enroll.service";

@Module({
  imports: [TypeOrmModule.forFeature([CourseEnroll, Course, Teacher, Student])],
  providers: [CourseEnrollService],
  controllers: [CousreEnrollController],
})
export class CourseEnrollModule {}
