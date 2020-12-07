import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./student.entity";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = new Student();
    let user = new User();
    user = createStudentDto.user;
    // user.firstName = createStudentDto.firstName;
    // user.lastName = createStudentDto.lastName;
    const userDb = await this.userRepository.save(user);
    student.registrationNumber = createStudentDto.registrationNumber;
    student.user = userDb;
    return this.studentRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find({ relations: ["user"] });
  }
}
