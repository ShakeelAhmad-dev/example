import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './students/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'myPassword',
      database: 'test1',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,StudentModule,TeacherModule
  ],
  // exports:[UsersModule]
})
export class AppModule {}
