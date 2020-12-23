import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { Teacher } from "./teacher.entity";
import { DeleteResult } from "typeorm";

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const teacher = new Teacher();
    // let user = new User();
    // user = createTeacherDto.user;
    // const userDb = await this.userRepository.save(user);
    teacher.cardInfo = createTeacherDto.cardInfo;
    // teacher.user = userDb;
    return this.teacherRepository.save(teacher);
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherRepository.find({ relations: ["user"] });
  }
  async findone(courseId): Promise<Teacher> {
    return await this.teacherRepository.findOne({ id: courseId });
  }
  async delete(id): Promise<DeleteResult> {
    return await this.teacherRepository.delete(id);
  }
}
