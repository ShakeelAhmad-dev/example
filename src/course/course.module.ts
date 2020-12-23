import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
// import { User } from "src/users/user.entity";
import { CousreController } from "./course.controller";
import { Course } from "./course.entity";
import { CourseService } from "./course.service";

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseService],
  controllers: [CousreController],
  // exports:[CourseService]
})
export class CourseModule {}
