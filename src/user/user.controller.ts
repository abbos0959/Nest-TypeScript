import { UserEntity } from './user.entity';
import { CreateUSerDto } from './../dto/createuser.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class UserController {
  constructor(private readonly user: UserService) {}
  @Post('/user')
  async CreateUser(@Body() createUserDto: CreateUSerDto) {
    const user = await this.user.useryaratish(createUserDto);
    return this.user.ResponseToken(user);
  }
}
