import { Model } from 'mongoose';
import { Theater } from './entities/theater.entity';
import { Injectable } from '@nestjs/common';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TheatersService {
  constructor(@InjectModel(Theater.name) private TheaterModel: Model<Theater>) { }
  create(createTheaterDto: CreateTheaterDto) {
    return 'This action adds a new theater';
  }

  findAll() {
    return this.TheaterModel.find().limit(6);
  }

  findOne(id: string) {
    return this.TheaterModel.findById(id);
  }

  update(id: number, updateTheaterDto: UpdateTheaterDto) {
    return `This action updates a #${id} theater`;
  }

  remove(id: number) {
    return `This action removes a #${id} theater`;
  }
}
