import { User } from "src/users/user.entity";

export class CreateCourseDto {
  courseName: string;
  user: User;
  // userId: string;
  // lastName:string;
  // firstName:string;
}
