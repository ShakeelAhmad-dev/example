import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from "src/course/course.entity";
import { CourseModule } from "src/course/course.module";
import {CourseService} from 'src/course/course.service';
import { Teacher } from "src/teacher/teacher.entity";
import { TeacherService } from "src/teacher/teacher.service";
import { User } from "src/users/user.entity";
// import { User } from "src/users/user.entity";
import { assignCousreController  } from "./assignCourse.controller";
import { assignCourse } from "./assignCourse.entity";
import { assignCourseService } from "./assingCourse.service";

@Module(
    {
        imports:[TypeOrmModule.forFeature([assignCourse,Teacher,Course,User]),CourseModule],
        providers:[assignCourseService,TeacherService,CourseService],
        controllers:[assignCousreController]
    }
)
export class AssignCourseModule{};