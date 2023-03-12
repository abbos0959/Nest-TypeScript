import { TagService } from './tag.service';
import { Controller, Get } from '@nestjs/common';
import { TagEntity } from './tag.entity';

@Controller()
export class TagController {
  constructor(private readonly tag: TagService) {}
  @Get('/tag')
  async findall() {
    const sa = await this.tag.tagcha();
    return {
      ismlar: sa.map((val) => val.name),
    };
  }
}
