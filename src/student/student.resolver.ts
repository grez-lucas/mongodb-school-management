/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

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
}
