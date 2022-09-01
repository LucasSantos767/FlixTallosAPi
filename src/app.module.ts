import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MovieModule } from './movie/movie.module';
import { TheatersModule } from './theaters/theaters.module';
import { SessionsModule } from './sessions/sessions.module';

@Module({
  imports: [AuthModule, UsersModule, CommentsModule, MovieModule, TheatersModule, SessionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
