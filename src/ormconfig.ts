import { TagEntity } from './tag/tag.entity';
import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'abbos1999',
  database: 'Nest',
  entities: [TagEntity],
  synchronize: true,
};
export default config;
