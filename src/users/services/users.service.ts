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

  findAll() {
    return this.userModel.find();
  }
  findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }
  findOne(id: string) {
    return this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10)
    return this.userModel.findByIdAndUpdate(id,updateUserDto);
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
