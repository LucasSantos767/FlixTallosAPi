import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Movie {

}
export const MovieSchema = SchemaFactory.createForClass(Movie);