import { TagEntity } from './tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity) private readonly tag: Repository<TagEntity>,
  ) {}
  async tagcha() {
    return await this.tag.find();
  }
}
