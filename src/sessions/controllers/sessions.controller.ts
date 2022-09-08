import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionsService } from '../services/sessions.service';
import { CreateSessionDto } from '../dto/create-session.dto';
import { UpdateSessionDto } from '../dto/update-session.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
@Controller('sessions')
@ApiBearerAuth('JWT-auth')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }

  @Get('list')
  findAll() {
    return this.sessionsService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.sessionsService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionsService.update(+id, updateSessionDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.sessionsService.remove(id);
  }
}
