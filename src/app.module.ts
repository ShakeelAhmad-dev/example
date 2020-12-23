import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CousreEnrollController } from "./course-enroll/course-enroll.controller";
import { CourseEnroll } from "./course-enroll/course-enroll.entity";
import { CourseModule } from "./course/course.module";
import { StudentModule } from "./students/student.module";
import { TeacherModule } from "./teacher/teacher.module";
import { UsersModule } from "./users/users.module";
import { CourseEnrollModule } from "./course-enroll/course-enroll.module";
import { AssignCourseModule } from "./assignCourse/assignCourse.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "myPassword",
      database: "test1",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    StudentModule,
    TeacherModule,
    CourseModule,
    CourseEnrollModule,
    AssignCourseModule,
  ],
  // exports:[UsersModule]
})
export class AppModule {}
