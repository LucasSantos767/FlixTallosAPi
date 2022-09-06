import { Module } from '@nestjs/common';
import { SessionsService } from './services/sessions.service';
import { SessionsController } from './controllers/sessions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Session, SessionSchema } from './entities/session.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }])],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [SessionsService]
})
export class SessionsModule { }
