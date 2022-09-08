import { Prop, Schema } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"

@Schema()
export class CreateAuthDto {
    @Prop()
    @ApiProperty({
        description: 'email do usuário',
        type: String,
        example: 'admin@gmail.com'
    })
    email: string
    @Prop()
    @ApiProperty({
        description: 'senha do usuário',
        type: String,
        example: 'Admin123@'
    })
    password: string
}
