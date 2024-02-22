import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true, // We will use decorators to save the schema, and regenerate it on each start
    }),
    LessonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
