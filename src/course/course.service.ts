import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
// import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";
import { Course } from "./course.entity";
import { DeleteResult } from "typeorm";

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course> // @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = new Course();
    // let user = new User();
    // user = createCourseDto.user;
    // const userDb = await this.userRepository.save(user);
    course.courseName = createCourseDto.courseName;
    // course.user = userDb;
    return this.courseRepository.save(course);
  }

  async findAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async findone(courseId): Promise<Course> {
    return await this.courseRepository.findOne({ id: courseId });
  }

  async delete(id): Promise<DeleteResult> {
    return await this.courseRepository.delete(id);
  }
}
