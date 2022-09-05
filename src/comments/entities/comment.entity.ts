import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({ versionKey: false })
export class Comment {
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'movies', required:true })
    movie_id: string
    @Prop()
    text: string;
    @Prop()
    date: Date
}
export const CommentSchema = SchemaFactory.createForClass(Comment);