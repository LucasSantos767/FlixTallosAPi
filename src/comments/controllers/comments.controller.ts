import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationParams } from 'src/movie/paginationParams';

@Controller('comments')
@ApiTags('comments')
@ApiBearerAuth('JWT-auth')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('create')
  @ApiOperation({ summary: 'criar um comentário para o filme' })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get('list')
  @ApiOperation({ summary: 'listar os comentários dos filmes' })
  findAll(@Query() {skip,limit}: PaginationParams) {
    return this.commentsService.findAll(skip,limit);
  }

  @Get('findOne/:id')
  @ApiOperation({ summary: 'procurar um comentário por id' })
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'atualizar o comentário de um filme' })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(id, updateCommentDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'deletar um comentário' })
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
