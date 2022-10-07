import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationParams } from 'src/movie/paginationParams';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth('JWT-auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @ApiOperation({ summary: 'criar um usuário' })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get('list')
  @ApiOperation({ summary: 'listar os usuários' })
  findAll(@Query() {skip,limit}:PaginationParams) {
    return this.usersService.findAll(skip,limit);
  }

  @Get('findOne/:id')
  @ApiOperation({ summary: 'pesquisar um usuário por id' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'atualizar dados de um usuário' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'excluir um usuário' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
