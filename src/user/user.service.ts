import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUSerDto } from './../dto/createuser.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { log } from 'console';
import { JwtModule } from '@nestjs/jwt';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {}
  async useryaratish(createdUserDto: CreateUSerDto) {
    const password = await bcrypt.hash(createdUserDto.password.toString(), 10);

    const user = await this.UserRepository.create({
      ...createdUserDto,
      password: password,
    });

    return await this.UserRepository.save(user);
  }
  generateToken(user: UserEntity) {
    return sign({ id: user.id }, 'secret', { expiresIn: '1d' });
  }

  ResponseToken(user: UserEntity) {
    return {
      ...user,
      token: this.generateToken(user),
    };
  }
}
