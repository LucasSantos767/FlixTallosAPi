import { Module } from '@nestjs/common';
import { MovieService } from './services/movie.service';
import { MovieController } from './controllers/movie.controller';
import { Movie, MovieSchema } from './entities/movie.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
