import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

// This will look almost like a CTL + C and CTL + V of the lesson.type.ts file, but with a few differences (decorators).
@Entity()
export class Lesson {
  // It is good practice to hide the _ID field from MongoDB to hide the inner workings of our DB

  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  students: string[];
}
