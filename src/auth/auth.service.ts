import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users.service';
import { UnauthorizedError } from './errors/unauthorized.error';
import { UserPayload } from './models/UserPayload';
import { UserSessions } from './models/UserSessions';
import { UserToken } from './models/UserToken';
import { Session } from 'src/sessions/entities/session.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
    @InjectModel(Session.name) private sessionModel: Model<Session>
  ) { }

  async login(user: User): Promise<UserToken> {
    const payload: UserPayload = {
      email: user.email,
      name: user.name,
    };
    const access = this.jwtService.sign(payload)
    const sessions: UserSessions = {
      user_id: payload.email,
      jwt: access
    }
    try {
      if (sessions.user_id === payload.email) {
        this.sessionModel.deleteOne({
          user_id: sessions.user_id
        }).exec()
        await this.sessionModel.create(sessions)
      }else{
        this.sessionModel.create(sessions)
      }
    } catch (error) {
      this.sessionModel.create(sessions)
    }
    return {
      access_token: access
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          name: user.name,
          email: user.email
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}