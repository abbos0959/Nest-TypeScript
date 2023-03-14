import { LoginUSerDto } from './../dto/login.dto';
import { UserEntity } from './user.entity';
import { CreateUSerDto } from './../dto/createuser.dto';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller()
export class UserController {
  constructor(private readonly user: UserService) {}
  @Post('/user')
  @UsePipes(new ValidationPipe())
  async CreateUser(@Body() createUserDto: CreateUSerDto) {
    const user = await this.user.useryaratish(createUserDto);
    return this.user.ResponseToken(user);
  }
  @Post('/user/login')
  @UsePipes(new ValidationPipe())
  async login(@Body() loginUserDto: LoginUSerDto) {
    const user = await this.user.login(loginUserDto);
    return this.user.ResponseToken(user);
  }
}
