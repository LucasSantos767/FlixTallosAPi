import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheatersService } from '../services/theaters.service';
import { CreateTheaterDto } from '../dto/create-theater.dto';
import { UpdateTheaterDto } from '../dto/update-theater.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('theaters')
@ApiBearerAuth('JWT-auth')
export class TheatersController {
  constructor(private readonly theatersService: TheatersService) {}

  @Post('create')
  create(@Body() createTheaterDto: CreateTheaterDto) {
    return this.theatersService.create(createTheaterDto);
  }

  @Get('list')
  findAll() {
    return this.theatersService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.theatersService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateTheaterDto: UpdateTheaterDto) {
    return this.theatersService.update(id, updateTheaterDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.theatersService.remove(id);
  }
}
