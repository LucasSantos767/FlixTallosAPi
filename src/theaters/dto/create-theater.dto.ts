import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import ITheater from "../interfaces/ITheater";
@Schema()
export class CreateTheaterDto {
    @Prop()
    @ApiProperty({
        description: 'id do teatro',
        type: String,
        example: '222'
    })
    theaterId: number;
    
    @Prop({ type: Object })
    @ApiProperty({
        description: 'localização do teatro',
        type: String,
        example: '{"address" : {"street1" : "101 Westgate","city" : "Amar","state" : "TX","zipcode" : "79121"},"geo" : {"type" : "Point","coordinates" : [-101.93422,35.183792]}}'
    })
    location: ITheater
}
