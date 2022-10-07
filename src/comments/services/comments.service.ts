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

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
   const query = this.commentModel.find().sort({_id:1}).skip(documentsToSkip * limitOfDocuments)
   if (limitOfDocuments) {
    query.limit(limitOfDocuments);
  }
  const results = await query;
    const count = await this.commentModel.count();
    return { results, count };
  }

  findOne(id: string) {
    return this.commentModel.findById(id);
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.commentModel.findOneAndUpdate({_id:id},updateCommentDto,{
      new:true
    });
  }

  remove(id: string) {
    return this.commentModel.findByIdAndDelete(id);
  }
}
