import { Controller, Get, Post ,Body} from "@nestjs/common";
import { CreateassignCourseDto } from "./dto/create-assignCourse.dto";
import { assignCourse } from "./assignCourse.entity";
import { assignCourseService } from "./assingCourse.service";
import { Course } from "src/course/course.entity";
// import { CourseService } from "./course.service";

@Controller("assignCourse")
export class assignCousreController {
  constructor(private readonly assignCourseService: assignCourseService) {}

  // @Get('')
  // findAll():Promise<assignCourse[]>{
  //     return await this.
  // }

  @Get(":id")
  findassignCourse(): string {
    return "assignCourse";
  }

  // @Get(':id')
  // findOne(@param('id') id: string){
  //   const result= this.courseService.findone(id);
  //   return result;
  // }

  @Post()
  createassignCourse(@Body() createassignCoursetDto:CreateassignCourseDto):Promise<assignCourse>{
    return this.assignCourseService.create(createassignCoursetDto)
  }

  @Get()
  findAll():Promise<assignCourse[]>{
    return this.assignCourseService.findAll();
  }
  
}
