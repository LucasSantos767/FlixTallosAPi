import { Module } from '@nestjs/common';
import { TheatersService } from './services/theaters.service';
import { TheatersController } from './controllers/theaters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Theater, TheaterSchema } from './entities/theater.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Theater.name, schema: TheaterSchema }])],
  controllers: [TheatersController],
  providers: [TheatersService]
})
export class TheatersModule {}
