import { NestFactory } from "@nestjs/core";
import { Console } from "console";
import { AppModule } from "./app.module";
import { CourseModule } from "./course/course.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  // console.log("Muneeb Ahmad")
}
bootstrap();
