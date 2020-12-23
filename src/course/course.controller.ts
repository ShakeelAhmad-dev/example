import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { CreateCourseDto } from "./dto/create-course.dto";
import { Course } from "./course.entity";
import { CourseService } from "./course.service";
import { DeleteResult } from "typeorm";
import { CLOSING } from "ws";

@Controller("course")
export class CousreController {
  constructor(private readonly courseService: CourseService) {}

  // @Get('')
  // findAll():Promise<Course[]>{
  //     return await this.
  // }

  @Get(":id")
  findOne(@Param("id") id: string) {
    const result = this.courseService.findone(id);
    return result;
  }

  @Post()
  createCourse(@Body() createCoursetDto: CreateCourseDto): Promise<Course> {
    // console.log(Body,"hiiiiiiiiiiiiiiiiiiiiii")
    return this.courseService.create(createCoursetDto);
  }

  @Get()
  findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }
  @Delete(":id")
  async delete(@Param("id") id): Promise<DeleteResult> {
    return this.courseService.delete(id);
  }
}
