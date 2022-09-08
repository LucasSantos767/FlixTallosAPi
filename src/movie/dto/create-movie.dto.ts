import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import ITomatoes from "../interfaces/ITomatoes";
@Schema()
export class CreateMovieDto {
    @Prop()
    @ApiProperty({
        description: 'plot do filme',
        type: String,
        example: 'filme conta a história de um paraguaio'
    })
    plot: string;
    @Prop()
    @ApiProperty({
        description: 'gêneros do filme',
        type: Array<String>,
        example: '[ "Drama", "History", "Romance"]'
    })
    genres: Array<string>;
    @Prop()
    @ApiProperty({
        description: 'tempo de filme',
        type: Number,
        example: '165'
    })
    runtime: number;
    @Prop()
    @ApiProperty({
        description: 'rated',
        type: String,
        example: 'NOT RATED'
    })
    rated: string;
    @Prop()
    @ApiProperty({
        description: 'elenco do filme',
        type: Array<String>,
        example: '["Lillian Gish", "Mae Marsh", "Henry B. Walthall", "Miriam Cooper"]'
    })
    cast: Array<string>;
    @Prop()
    @ApiProperty({
        description: 'poster do filme',
        type: String,
        example: 'https://m.media-amazon.com/images/M/MV5BMjAwNTIxMjE5N15BMl5BanBnXkFtZTgwODc1Mjg1MzE@._V1_SY1000_SX677_AL_.jpg'
    })
    poster: string;
    @Prop()
    @ApiProperty({
        description: 'titulo do filme',
        type: String,
        example: 'Rio'
    })
    title: string;
    @Prop()
    @ApiProperty({
        description: 'Plot completo do filme',
        type: String,
        example: 'Paraguaio se perde no Rio de Janeiro'
    })
    fullplot: string;
    @Prop()
    @ApiProperty({
        description: 'Plot completo do filme',
        type: Array<String>,
        example: '["USA"]'
    })
    countries: Array<string>;
    @Prop()
    @ApiProperty({
        description: 'lançamento do filme',
        type: Date,
        example: '1915-03-03T00:00:00.000Z'
    })
    released: Date;
    @Prop()
    @ApiProperty({
        description: 'diretores do filme',
        type: Array<String>,
        example:'["D.W. Griffith"]'
    })
    directors: Array<string>;
    @Prop()
    @ApiProperty({
        description: 'escritores do filme',
        type: Array<String>,
        example:'[ "Thomas Dixon Jr. (adapted from his novel: \"The Clansman: An Historical Romance of the Ku Klux Klan\")", "Thomas Dixon Jr. (play)", "Thomas Dixon Jr. (novel)", "D.W. Griffith", "Frank E. Woods" ]'
    })
    writers: Array<string>;
    @Prop({type:Object})
    @ApiProperty({
        description:'escritores do filme',
        type: Object,
        example:'{ "wins" : 2, "nominations" : 0, "text" : "2 wins." }'
    })
    awards: object;
    @Prop()
    @ApiProperty({
        description:'escritores do filme',
        type: String,
        example:'2015-09-11 00:32:27.763000000'
    })
    lastupdated: string;
    @Prop()
    @ApiProperty({
        description:'ano do filme',
        type: Number,
        example:'2015'
    })
    year: number;
    @Prop({type:Object})
    @ApiProperty({
        description:'avaliação do filme',
        type: Object,
        example:'{ "rating" : 6.8, "votes" : 15715, "id" : 4972 }'
    })
    imdb: object;
    @Prop({type:Object})
    @ApiProperty({
        description:'tipo do filme',
        type: String,
        example:'movie'
    })
    type: string;
    @Prop({type:Object})
    @ApiProperty({
        description:'dados do filme',
        type: Object,
        example:'{ "viewer" : { "rating" : 3.2, "numReviews" : 4358, "meter" : 57 }, "dvd" : "2004-06-29T00:00:00.000Z", "critic" : { "rating" : 8.0, "numReviews" : 38, "meter" : 100 }, "lastUpdated" : "2015-09-10T18:30:23.000Z", "consensus" : "Racial depictions aside, The Birth of a Nation is a landmark film whose achievements and pioneering techniques remain fully relevant today.", "rotten" : 0, "production" : "Gravitas", "fresh" : 38 }'
    })
    tomatoes: ITomatoes
}
