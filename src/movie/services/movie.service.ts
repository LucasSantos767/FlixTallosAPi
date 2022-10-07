import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) { }
  create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.movieModel.create(createMovieDto);
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const count = await this.movieModel.count();
    const query = this.movieModel.find().sort({ _id: 1 }).skip(documentsToSkip * limitOfDocuments)
    if (limitOfDocuments) {
      query.limit(limitOfDocuments);
    }
    const results = await query;
    return { results, count };
  }

  findOne(id: string) {
    return this.movieModel.findById(id);
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.movieModel.findOneAndUpdate({ _id: id }, updateMovieDto, {
      new: true
    });
  }

  remove(id: string) {
    return this.movieModel.findByIdAndDelete(id);
  }
}
