import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class CreateCommentDto {
    @Prop()
    @ApiProperty({
        description: 'nome do usuário que fez o comentário',
        type: String,
        example: 'Monica'
    })
    name: string;
    @Prop()
    @ApiProperty({
        description: 'email do usuário que fez o comentário',
        type: String,
        example: 'exemple@gmail.com'
    })
    email: string;
    @Prop()
    @ApiProperty({
        description: 'id do filme',
        type: String,
        example: "573a1390f29313caabcd418c"
    })
    movie_id: string
    @Prop()
    @ApiProperty({
        description: 'Comentário',
        type: String,
        example: 'filme bom'
    })
    text: string;
    @Prop()
    @ApiProperty({
        description: 'data que o comentário foi feito',
        type: String,
        example: "2012-03-26 23:20:16.000Z"
    })
    date: Date
}
