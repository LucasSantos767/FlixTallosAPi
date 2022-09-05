import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";

@Schema({ versionKey: false })
export class Comment {
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    movie_id: ObjectId
    @Prop()
    text: string;
    @Prop()
    date: Date
}
export const CommentSchema = SchemaFactory.createForClass(Comment);