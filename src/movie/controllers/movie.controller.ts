import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MovieService } from '../services/movie.service';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationParams } from '../paginationParams';

@Controller('movies')
@ApiTags('movies')
@ApiBearerAuth('JWT-auth')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post('create')
  @ApiOperation({ summary: 'adicionar um filme' })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get('list')
  @ApiOperation({ summary: 'listar os filmes' })
  findAll(@Query() { skip, limit }: PaginationParams) {
    return this.movieService.findAll(skip,limit);
  }

  @Get('findOne/:id')
  @ApiOperation({ summary: 'pesquisar um filme' })
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'atualizar dados do filme' })
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'deletar um filme' })
  remove(@Param('id') id: string) {
    return this.movieService.remove(id);
  }
}
