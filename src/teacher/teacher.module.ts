import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { TeacherController } from "./teacher.controller";
import { Teacher } from "./teacher.entity";
import { TeacherService } from "./teacher.service";

@Module(
    {
        imports:[TypeOrmModule.forFeature([Teacher,User])],
        providers:[TeacherService],
        controllers:[TeacherController]
    }
)
export class TeacherModule{};