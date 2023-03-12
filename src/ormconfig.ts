import { TagEntity } from './tag/tag.entity';
// import { DataSourceOptions, DataSource, ConnectionOptions } from 'typeorm';

// const config: ConnectionOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'abbos1999',
//   database: 'Nest',

//   entities: [__dirname + '/../**/*.entity.{js,ts}'],
//   // entities:[TagEntity],
//   synchronize: false,

//   migrations: [],
//   // autoLoadEntities: true
// };
// export default config;

import { DataSource } from 'typeorm';
// import { Task } from "../entity/Task";
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'abbos1999',
  database: 'Nest',
  entities: [TagEntity],
  synchronize: true,
  logging: false,
});
