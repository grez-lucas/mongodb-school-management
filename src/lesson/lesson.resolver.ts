/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver((_of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((_returns) => LessonType)
  getLesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query((_returns) => LessonType)
  lessonById(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Mutation((_returns) => LessonType)
  createLesson(
    @Args('name') name: string, // This allows us to retrieve individual arguments
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    // We will create a service that handles Lesson creation logic!
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
