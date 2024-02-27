/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';
import { StudentService } from '../student/student.service';

@Resolver((_of) => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}
  @Query((_returns) => LessonType)
  getLesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query((_returns) => [LessonType])
  getLessons() {
    return this.lessonService.getLessons();
  }

  @Mutation((_returns) => LessonType)
  createLesson(
    @Args('createLessonInputs') createLessonInput: CreateLessonInput,
  ) {
    // We will create a service that handles Lesson creation logic!
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation((_returns) => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    return this.lessonService.assignStudentsToLesson(
      assignStudentsToLessonInput,
    );
  }

  @ResolveField() // Tells grapQL this is a resolver for this field
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
