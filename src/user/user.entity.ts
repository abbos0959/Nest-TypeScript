import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';
@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  image: string;
  // @BeforeInsert()
  // async hashpassword() {
  //   this.password = await hash(this.password.toString(), 10);
  // }
}
