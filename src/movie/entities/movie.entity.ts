import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import ITomatoes from "../interfaces/ITomatoes";

@Schema({ versionKey: false })
export class Movie {
    @Prop()
    plot: string;
    @Prop()
    genres: Array<string>;
    @Prop()
    runtime: number;
    @Prop()
    rated: string;
    @Prop()
    cast: Array<string>;
    @Prop()
    poster: string;
    @Prop()
    title: string;
    @Prop()
    fullplot: string;
    @Prop()
    countries: Array<string>;
    @Prop()
    released: Date;
    @Prop()
    directors: Array<string>;
    @Prop()
    writers: Array<string>;
    @Prop({ type: Object })
    awards: object;
    @Prop()
    lastupdated: string;
    @Prop()
    year: number;
    @Prop({type:Object})
    imdb: object;
    @Prop()
    type: string;
    @Prop({type:Object})
    tomatoes: ITomatoes
}
export const MovieSchema = SchemaFactory.createForClass(Movie);