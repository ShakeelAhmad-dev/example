import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./student.entity";
import { UpdateResult, DeleteResult } from "typeorm";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = new Student();
    // let user = new User();
    //   user = createStudentDto.user;
    //   const userDb = await this.userRepository.save(user);
    student.registrationNumber = createStudentDto.registrationNumber;
    //   student.user = userDb;
    return this.studentRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find({ relations: ["user"] });
  }
  async findone(studentId): Promise<Student> {
    return await this.studentRepository.findOne({ id: studentId });
  }
  async delete(id): Promise<DeleteResult> {
    return await this.studentRepository.delete(id);
  }
}
