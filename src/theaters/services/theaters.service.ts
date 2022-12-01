import { Model } from 'mongoose';
import { Theater } from '../entities/theater.entity';
import { Injectable, Query } from '@nestjs/common';
import { CreateTheaterDto } from '../dto/create-theater.dto';
import { UpdateTheaterDto } from '../dto/update-theater.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TheatersService {
  constructor(@InjectModel(Theater.name) private theaterModel: Model<Theater>) { }
  create(createTheaterDto: CreateTheaterDto):Promise<Theater> {
    return this.theaterModel.create(createTheaterDto);
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const query = this.theaterModel.find().sort({ _id: 1 }).skip(documentsToSkip * limitOfDocuments)
    if (limitOfDocuments) {
      query.limit(limitOfDocuments);
    }
    const results = await query;
    const count = await this.theaterModel.count();
    return { results, count };
  }

  findOne(id: string) {
    return this.theaterModel.findById(id);
  }

  update(id: string, updateTheaterDto: UpdateTheaterDto) {
    return this.theaterModel.findOneAndUpdate({_id:id},updateTheaterDto,{
      new:true
    });
  }

  remove(id: string) {
    return this.theaterModel.findByIdAndDelete(id);
  }
}
