import { Controller, Get, Post ,Body} from "@nestjs/common";
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

  @Get(":id")
  findStudent(): string {
    return "student";
  }

  @Post()
  createStudent(@Body() createStudentDto:CreateStudentDto):Promise<Student>{
    return this.studentService.create(createStudentDto)
  }

  @Get()
  findAll():Promise<Student[]>{
    return this.studentService.findAll();
  }

}
