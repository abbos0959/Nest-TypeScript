import { AuthMiddleware } from './middleware/auth.middleware';
import { UserEntity } from './user/user.entity';

import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'abbos1999',
      database: 'Nest',
      entities: [UserEntity],
      // migrations: [__dirname, '**', '*{.ts,.js}'],
      synchronize: true,
    }),
    TagModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
