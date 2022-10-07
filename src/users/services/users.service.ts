import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }
 async create(createUserDto: CreateUserDto) {
  const data = {
    ...createUserDto,
    password: await bcrypt.hash(createUserDto.password, 10),
  }
  const Incrypt = await this.userModel.create(data)
  return {email:Incrypt.email, name:Incrypt.name, password:Incrypt.password};
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?:number) {
    const query = this.userModel.find().sort({_id:1}).skip(documentsToSkip * limitOfDocuments)
    if (limitOfDocuments) {
      query.limit(limitOfDocuments);
    }
    const results = await query;
    const count = await this.userModel.count();
    return { results, count };
  }
  findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }
  findOne(id: string) {
    return this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10)
    return this.userModel.findOneAndUpdate({_id: id},updateUserDto,{
      new: true
    });
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
