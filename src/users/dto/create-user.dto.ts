import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class CreateUserDto {
    @Prop()
    @ApiProperty({
        description: 'nome do usuário',
        type: String,
        example: 'admin'
    })
    name: string;
    @Prop()
    @ApiProperty({
        description: 'email do usuário',
        type: String,
        example: 'admin1@gmail.com'
    })
    email: string;
    @Prop()
    @ApiProperty({
        description: 'senha do usuário',
        type: String,
        example: 'admin123'
    })
    password: string
}
