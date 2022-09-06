import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({ versionKey: false })
export class Session {
    @Prop()
    user_id: string;
    @Prop()
    jwt: string
}
export const SessionSchema = SchemaFactory.createForClass(Session);