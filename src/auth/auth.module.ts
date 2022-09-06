import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { LoginValidationMiddleware } from './middlewares/login-validation.middleware';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './strategies/jwt-strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { Session, SessionSchema } from 'src/sessions/entities/session.entity';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
    MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }])
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}