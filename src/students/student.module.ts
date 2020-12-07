import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { StudentController } from "./student.controller";
import { Student } from "./student.entity";
import { StudentService } from "./student.service";

@Module(
    {
        imports:[TypeOrmModule.forFeature([Student,User])],
        providers:[StudentService],
        controllers:[StudentController]
    }
)
export class StudentModule{};