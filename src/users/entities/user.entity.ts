import { Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    name: string;
    email: string;
    password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);