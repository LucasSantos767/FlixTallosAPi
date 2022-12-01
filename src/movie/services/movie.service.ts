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

  async findAll(pagination) {
    try {
      const limit = pagination.limit || 10;
      const currentPage = pagination.page || 1;
      const skip = limit * (currentPage - 1);
      const total = await this.movieModel.countDocuments();
      const qtdPages = Math.floor(total / pagination.limit) + 1;
      const totalResponse = await this.movieModel.find().count();
      const query = this.movieModel.find().sort({ _id: 1 }).skip(skip).limit(limit);
      const results = await query;
      return {
        results,
        numberOfElements: total,
        pagesTotal: qtdPages,
        page: pagination.page || 1,
        totalResponse: totalResponse,
      };
    } catch {
      console.log('deu erro man')
    }
  }

  findOne(id: string) {
    return this.movieModel.findById(id);
  }

  async getByName(title: string, pagination) {
    try {
      const limit = pagination.limit || 10;
      const currentPage = pagination.page || 1;
      const skip = limit * (currentPage - 1);
      const total = await this.movieModel.countDocuments();
      const qtdPages = Math.floor(total / pagination.limit) + 1;
      const totalResponse = await this.movieModel.find({
        title: { $regex: title, $options: 'i' },
      }).sort({ _id: 1 }).count();
      const query = this.movieModel.find({
        title: { $regex: title, $options: 'i' },
      }).sort({ _id: 1 }).skip(skip).limit(limit);
      const results = await query;
      return {
        results,
        numberOfElements: total,
        pagesTotal: qtdPages,
        page: pagination.page || 1,
        totalResponse: totalResponse,
      };
    } catch {
      console.log('deu erro man')
    }
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
