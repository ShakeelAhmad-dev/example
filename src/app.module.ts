import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './students/student.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,StudentModule
  ],
  // exports:[UsersModule]
})
export class AppModule {}
