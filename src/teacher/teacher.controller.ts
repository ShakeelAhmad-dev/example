import { Controller, Get, Post ,Body} from "@nestjs/common";
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { Teacher } from "./teacher.entity";
import { TeacherService } from "./teacher.service";

@Controller("teacher")
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  // @Get('')
  // findAll():Promise<teacher[]>{
  //     return await this.
  // }

  @Get(":id")
  findTeacher(): string {
    return "teacher";
  }

  @Post()
  createTeacher(@Body() createTeacherDto:CreateTeacherDto):Promise<Teacher>{
    return this.teacherService.create(createTeacherDto)
  }

  @Get()
  findAll():Promise<Teacher[]>{
    return this.teacherService.findAll();
  }

}
