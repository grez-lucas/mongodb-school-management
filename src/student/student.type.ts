import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => ID)
  id: string;
  @Field(() => String)
  firstName: string;
  @Field(() => String)
  lastName: string;
}
