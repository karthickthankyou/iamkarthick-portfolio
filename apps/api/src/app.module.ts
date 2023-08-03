import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './common/prisma/prisma.module'
import { ResumesModule } from './models/resumes/resumes.module'
import { ProjectsModule } from './models/projects/projects.module'
import { UrlsModule } from './models/urls/urls.module'
import { TechnologiesModule } from './models/technologies/technologies.module'
import { SocialsModule } from './models/socials/socials.module'
import { ExperiencesModule } from './models/experiences/experiences.module'
import { EducationsModule } from './models/educations/educations.module'
import { FirebaseModule } from './common/firebase/firebase.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      introspection: true,
    }),

    PrismaModule,
    FirebaseModule,

    ResumesModule,
    ProjectsModule,
    UrlsModule,
    TechnologiesModule,
    SocialsModule,
    ExperiencesModule,
    EducationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
