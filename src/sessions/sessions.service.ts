import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(@InjectModel(Session.name) private sessionModel: Model<Session>) { }
  create(createSessionDto: CreateSessionDto): Promise<Session> {
    return this.sessionModel.create(createSessionDto);
  }

  findAll() {
    return this.sessionModel.find();
  }

  findOne(id: string) {
    return this.sessionModel.findById(id);
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
