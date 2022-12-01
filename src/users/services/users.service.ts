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
    return { email: Incrypt.email, name: Incrypt.name, password: Incrypt.password };
  }

  async findAll(pagination) {
    try {
      const limit = pagination.limit || 10;
      const currentPage = pagination.page || 1;
      const skip = limit * (currentPage - 1);
      const total = await this.userModel.countDocuments();
      const qtdPages = Math.floor(total / pagination.limit) + 1;
      const totalResponse = await this.userModel.find().count();
      const query = this.userModel.find().sort({ _id: 1 }).skip(skip).limit(limit);
      const results = await query;
      return {
        results,
        numberOfElements: total,
        pagesTotal: qtdPages,
        page: pagination.page || 1,
        totalResponse: totalResponse,
      };
    } catch {
      console.log('deu erro')
    }
  }
  findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }
  findOne(id: string) {
    return this.userModel.findById(id);
  }
  async getByName(name: string, pagination) {
    try {
      const limit = pagination.limit || 10;
      const currentPage = pagination.page || 1;
      const skip = limit * (currentPage-1);
      const total = await this.userModel.countDocuments();
      const qtdPages = Math.floor(total/pagination.limit)+1
      const totalResponse = await this.userModel.find({
        name:{$regex:name,$options:'i'},
      }).sort({_id:1}).count();
      const query = this.userModel.find({
        name:{$regex:name,$options:'i'},
      }).sort({_id:1}).skip(skip).limit(limit);
      const results = await query;
      return {
        results,
        numberOfElements: total,
        pagesTotal: qtdPages,
        page: pagination.page || 1,
        totalResponse: totalResponse,
      };
    } catch (error) {
      console.log('deu erro man')
    }
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10)
    return this.userModel.findOneAndUpdate({ _id: id }, updateUserDto, {
      new: true
    });
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
