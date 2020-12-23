import { Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
// import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateCourseEnrollDto } from "./dto/create-course-enroll.dto";
import { CourseEnroll } from "./course-enroll.entity";
import { Student } from "src/students/student.entity";
import { Course } from "src/course/course.entity";
import { Teacher } from "src/teacher/teacher.entity";

@Injectable()
export class CourseEnrollService {
  constructor(
    @InjectRepository(CourseEnroll)
    private readonly courseEnrollRepository: Repository<CourseEnroll>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>
  ) // @InjectRepository(User) private readonly userRepository: Repository<User>
  {}

  async create(
    createCourseEnrollDto: CreateCourseEnrollDto
  ): Promise<CourseEnroll> {
    const courseEnroll = new CourseEnroll();

    // student =
    const s = await this.studentRepository.create(
      createCourseEnrollDto.student
    );
    courseEnroll.student = s;
    const c = await this.courseRepository.create(createCourseEnrollDto.course);
    courseEnroll.course = c;
    const t = await this.teacherRepository.create(
      createCourseEnrollDto.teacher
    );
    courseEnroll.teacher = t;

    // let user = new User();
    // user = createCourseDto.user;
    // const userDb = await this.userRepository.save(user);
    // courseEnroll.courseName = createCourseDto.courseName;
    // course.user = userDb;
    return await this.courseEnrollRepository.save(courseEnroll);
  }

  async findAll(): Promise<CourseEnroll[]> {
    return this.courseEnrollRepository.find();
  }
}
