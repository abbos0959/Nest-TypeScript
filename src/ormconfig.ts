import { TagEntity } from './tag/tag.entity';
import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'abbos1999',
  database: 'Nest',

  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // entities:[TagEntity],
  synchronize: false,

  migrations: [],
};
export default config;
