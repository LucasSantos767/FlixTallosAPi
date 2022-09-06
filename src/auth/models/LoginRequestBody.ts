import { IsEmail, IsString } from 'class-validator';

export class LoginRequestBody {
  email: string;
  password: string;
}