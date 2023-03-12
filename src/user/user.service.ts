import { CreateUSerDto } from './../dto/createuser.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async useryaratish(createdUserDto: CreateUSerDto) {
    return createdUserDto;
  }
}
