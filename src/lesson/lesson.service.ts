import { Injectable, NotFoundException } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) // The lesson entity will be injected into this service
    private lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name: name,
      startDate: startDate,
      endDate: endDate,
      students: students,
    });

    return await this.lessonRepository.save(lesson);
  }

  async getLesson(id: string): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({ where: { id } });

    if (!lesson) {
      throw new NotFoundException(`Lesson with ID: ${id} not found!`);
    }
    return lesson;
  }

  async getLessons(): Promise<Lesson[]> {
    const lessons = await this.lessonRepository.find();
    return lessons;
  }

  async assignStudentsToLesson(
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ): Promise<Lesson> {
    const { lessonId, studentIds } = assignStudentsToLessonInput;

    const lesson = await this.getLesson(lessonId);
    console.log(`Adding students to lesson: ${lessonId}...`);

    lesson.students = [...lesson.students, ...studentIds];
    console.log(
      `${lesson.students.length} students added to lesson: ${lessonId}`,
    );
    return await this.lessonRepository.save(lesson);
  }
}
