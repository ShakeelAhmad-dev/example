import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { get } from "http";
import { DeleteResult } from "typeorm";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./student.entity";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // @Get('')
  // findAll():Promise<Student[]>{
  //     return await this.
  // }

  // @Get(":id")
  // findStudent(): string {
  //   return "student";
  // }

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    // const sahkeel = createStudentDto["softHouseName"]
    // console.log(createStudentDto.registrationNumber.length)
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }
  @Get(":id")
  findOne(@Param("id") id: string) {
    const result = this.studentService.findone(id);
    return result;
  }
  @Delete(":id")
  async delete(@Param("id") id): Promise<DeleteResult> {
    return this.studentService.delete(id);
  }
}
