import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUSerDto } from './../dto/createuser.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { log } from 'console';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {}
  async useryaratish(createdUserDto: CreateUSerDto) {
    // const password = await bcrypt.hash(createdUserDto.password.toString(), 10);
    const user = new UserEntity();
    Object.assign(user, createdUserDto);

    return await this.UserRepository.save(user);
  }
}
