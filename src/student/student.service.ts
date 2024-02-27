import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entitiy';
import { MongoRepository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: MongoRepository<Student>, // Specific to MongoDB! Allows the use of Mongo Queries and methods
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return await this.studentRepository.save(student);
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    // A simple method that gets many students by their IDs
    // This method is injected in the lesson.resolver.ts
    const students = await this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
    return students;
  }
}
