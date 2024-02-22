import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // We will use Apollo as the driver
      autoSchemaFile: true, // We will use decorators to save the schema, and regenerate it on each start
    }),
    LessonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
