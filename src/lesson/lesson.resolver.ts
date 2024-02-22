/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((_of) => LessonType)
export class LessonResolver {
  @Query((_returns) => LessonType)
  lesson() {
    return {
      id: 'a6f9b6e7-3b5d-4d1b-8b5d-3c5e3e6e6e6e',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
