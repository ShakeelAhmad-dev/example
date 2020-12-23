import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateCourseEnrollDto } from "./dto/create-course-enroll.dto";
import { CourseEnroll } from "./course-enroll.entity";
import { CourseEnrollService } from "./course-enroll.service";

@Controller("courseEnroll")
export class CousreEnrollController {
  constructor(private readonly courseEnrollService: CourseEnrollService) {}

  // @Get('')
  // findAll():Promise<CourseEnroll[]>{
  //     return await this.
  // }

  @Get(":id")
  findCourseEnroll(): string {
    return "courseEnroll";
  }

  @Post()
  createCourseEnroll(
    @Body() createCourseEnrolltDto: CreateCourseEnrollDto
  ): Promise<CourseEnroll> {
    // course this.fin
    // teacher this,.
    // enroll repos enrollcoure.cours =course
    // enroll.teaher = teacher
    // this.
    return this.courseEnrollService.create(createCourseEnrolltDto);
  }

  @Get()
  findAll(): Promise<CourseEnroll[]> {
    return this.courseEnrollService.findAll();
  }
}
