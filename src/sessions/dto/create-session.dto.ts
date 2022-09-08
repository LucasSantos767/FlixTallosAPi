import { Prop, Schema } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"

@Schema()
export class CreateSessionDto {
    @Prop()
    @ApiProperty({
        description: 'email do usuario na sessão',
        type: String,
        example: 'exemple@gmail.com'
    })
    user_id: string
    @Prop()
    @ApiProperty({
        description: 'jwt do usuario na sessão',
        type: String,
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIm5hbWUiOiJMdWNhcyIsImlhdCI6MTY2MjQ5MzkzMCwiZXhwIjoxNjY1MDg1OTMwfQ.RfkXtvzASfeyduYx6PULH7BLX01XereeD28s8JyW_Hs'
    })
    jwt: string
}
