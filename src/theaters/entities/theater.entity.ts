import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import ITheater from "../interfaces/ITheater";
@Schema()
export class Theater {
    @Prop()
    theaterid: number;
    @Prop({ type: Object })
    location: ITheater
}
export const TheaterSchema = SchemaFactory.createForClass(Theater);