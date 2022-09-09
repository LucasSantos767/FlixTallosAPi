import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheatersService } from '../services/theaters.service';
import { CreateTheaterDto } from '../dto/create-theater.dto';
import { UpdateTheaterDto } from '../dto/update-theater.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('theaters')
@ApiTags('theaters')
@ApiBearerAuth('JWT-auth')
export class TheatersController {
  constructor(private readonly theatersService: TheatersService) {}

  @Post('create')
  @ApiOperation({ summary: 'adicionar um teatro' })
  create(@Body() createTheaterDto: CreateTheaterDto) {
    return this.theatersService.create(createTheaterDto);
  }

  @Get('list')
  @ApiOperation({ summary: 'listar todos os teatros' })
  findAll() {
    return this.theatersService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({ summary: 'pesquisar um teatro' })
  findOne(@Param('id') id: string) {
    return this.theatersService.findOne(id);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'atualizar informações do teatro' })
  update(@Param('id') id: string, @Body() updateTheaterDto: UpdateTheaterDto) {
    return this.theatersService.update(id, updateTheaterDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'deletar um teatro' })
  remove(@Param('id') id: string) {
    return this.theatersService.remove(id);
  }
}
