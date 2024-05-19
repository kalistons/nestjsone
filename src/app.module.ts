import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './commons/commons.service';

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions())],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
