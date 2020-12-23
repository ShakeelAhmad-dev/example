import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
// import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateassignCourseDto } from "./dto/create-assignCourse.dto";
import { Course } from "src/course/course.entity";
import { Teacher } from "src/teacher/teacher.entity";
import { CourseService } from "src/course/course.service";
import { TeacherService } from "src/teacher/teacher.service";
import { assignCourse} from "src/assignCourse/assignCourse.entity"

@Injectable()
export class assignCourseService {
  constructor(
    @InjectRepository(assignCourse)
    private readonly assigncourseRepository: Repository<assignCourse>,
    @InjectRepository(Course)
    private readonly courseRepository : Repository<Course>,
    @InjectRepository(Teacher)
    private readonly teacherRepository : Repository<Teacher>,
    // @InjectRepository(CourseService)
    // private readonly CourseService : Repository<Teacher>,
    // @InjectRepository(TeacherService)
    // private readonly teacherService : Repository<Teacher>,
    // @InjectRepository(User) private readonly userRepository: Repository<User>
    private readonly teacherService : TeacherService,
    private readonly courseService : CourseService
  ) {}

  async create(createassignCourseDto:CreateassignCourseDto): Promise<assignCourse> {
   
  const assigncourse = new assignCourse();
  // const cId = createassignCourseDto.courseId;
  // const tId = createassignCourseDto.teacherId;
  // const teach = await this.teacherService.findone(tId);
  // const cr = await this.courseService.findone(cId);


  
    // return {createassignCourseDto.teacherId,};
    // const c = await this.courseRepository.create(createassignCourseDto.course);
    // assigncourse.course = c;
    // const t = await this.teacherRepository.create(createassignCourseDto.teacher);
    // assigncourse.teacher = t;
    
    // let user = new User();
    // user = createCourseDto.user;
    // const userDb = await this.userRepository.save(user);
    // course.courseName = createCourseDto.courseName;
    // course.user = userDb;
    return await this.assigncourseRepository.save(assigncourse);
  }

  async findAll(): Promise<assignCourse[]> {
    return this.assigncourseRepository.find();
  }
  findOne(id: string): Promise<assignCourse> {
    return this.assigncourseRepository.findOne(id);
  }
}
