import { Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((_of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
}
