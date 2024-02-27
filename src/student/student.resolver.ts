/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((_of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((_returns) => StudentType)
  getStudent() {
    return {
      id: '123',
      firstName: 'Tim',
      lastName: 'Smith',
    };
  }

  @Query((_returns) => [StudentType])
  getStudents() {
    return this.studentService.getStudents();
  }

  @Mutation((_returns) => StudentType)
  createStudent(
    @Args('createStudentInputs') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
