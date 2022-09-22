import { Model } from 'mongoose';
import { Theater } from '../entities/theater.entity';
import { Injectable } from '@nestjs/common';
import { CreateTheaterDto } from '../dto/create-theater.dto';
import { UpdateTheaterDto } from '../dto/update-theater.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TheatersService {
  constructor(@InjectModel(Theater.name) private theaterModel: Model<Theater>) { }
  create(createTheaterDto: CreateTheaterDto):Promise<Theater> {
    return this.theaterModel.create(createTheaterDto);
  }

  findAll() {
    return this.theaterModel.find().limit(6);
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
