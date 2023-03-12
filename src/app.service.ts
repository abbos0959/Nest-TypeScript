import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getyiban() {
    return ['abbos', 'ukajon'];
  }
}
