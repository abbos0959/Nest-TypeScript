import { TagService } from './tag.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class TagController {
  constructor(private readonly tag: TagService) {}
  @Get('/tag')
  findall() {
    return this.tag.tagcha();
  }
}
