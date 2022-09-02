import { Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Theater {}
export const TheaterSchema = SchemaFactory.createForClass(Theater);