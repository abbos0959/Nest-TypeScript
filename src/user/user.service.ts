import { userResponseInterface } from './../types/userResponse.interface';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUSerDto } from './../dto/createuser.dto';
import { LoginUSerDto } from './../dto/login.dto';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { log } from 'console';
import { JwtModule } from '@nestjs/jwt';
import { sign } from 'jsonwebtoken';
import { Request, Response } from 'express';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {}
  async useryaratish(createdUserDto: CreateUSerDto): Promise<UserEntity> {
    // bunday  user ro'yhatdan o'tgan yoki o'tmaganligini tekshirish
    const test = await this.UserRepository.findOne({
      where: { email: createdUserDto.email },
    });

    if (test) {
      throw new HttpException(
        'bunday user avvaldan mavjud',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const password = await bcrypt.hash(createdUserDto.password.toString(), 10);
    const user = await this.UserRepository.create({
      ...createdUserDto,
      password: password,
    });

    return await this.UserRepository.save(user);
  }

  async login(loginUserDto: LoginUSerDto) {
    const user = await this.UserRepository.findOne({
      where: { email: loginUserDto.email },
    });
    if (!user) {
      throw new HttpException(
        'bunday user mavjud emas iltimos tizimga kiring',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const comparePassword = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if (!comparePassword) {
      throw new HttpException(
        'Parol xatoligi iltimos tekshirib qaytadan tering',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return user;
  }

  async CurretUser() {}
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
