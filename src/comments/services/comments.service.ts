import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) { }
  create(createCommentDto: CreateCommentDto) {
    return this.commentModel.create(createCommentDto);
  }

  findAll() {
    return this.commentModel.find().limit(6);
  }

  findOne(id: string) {
    return this.commentModel.findById(id);
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.commentModel.findByIdAndUpdate(id,updateCommentDto);
  }

  remove(id: string) {
    return this.commentModel.findByIdAndDelete(id);
  }
}
