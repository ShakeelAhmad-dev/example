import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { Teacher } from "./teacher.entity";
import { TeacherService } from "./teacher.service";
import { DeleteResult } from "typeorm";

@Controller("teacher")
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  // @Get('')
  // findAll():Promise<teacher[]>{
  //     return await this.
  // }
  @Get(":id")
  findOne(@Param("id") id: string) {
    const result = this.teacherService.findone(id);
    return result;
  }

  @Post()
  createCourse(@Body() CreateTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teacherService.create(CreateTeacherDto);
  }

  @Get()
  findAll(): Promise<Teacher[]> {
    return this.teacherService.findAll();
  }
  @Delete(":id")
  async delete(@Param("id") id): Promise<DeleteResult> {
    return this.teacherService.delete(id);
  }
}
