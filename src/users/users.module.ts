import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService,{
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }],
  exports:[UsersService]
})
export class UsersModule {}
