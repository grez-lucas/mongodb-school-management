// This file is for defining the type of the lesson object in GraphQL

import { Field, ID, ObjectType } from '@nestjs/graphql';

// We pass the 'Lesson' string so we can reference this as 'Lesson' in the GraphQL schema
@ObjectType('Lesson') // This is a decorator that tells NestJS that this is a GraphQL object type
export class LessonType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => ID) // It is a good idea to add the @Field() decorator to each property of the class
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}