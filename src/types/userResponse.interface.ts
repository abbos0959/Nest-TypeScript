import { UserEntity } from 'src/user/user.entity';

export interface userResponseInterface {
  user: UserEntity & { token: string };
}
