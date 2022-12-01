import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import ITheater from "../interfaces/ITheater";
@Schema({ versionKey: false })
export class Theater {
    @Prop()
    theaterId: number;
    @Prop({ type: Object })
    location: ITheater
}
export const TheaterSchema = SchemaFactory.createForClass(Theater);