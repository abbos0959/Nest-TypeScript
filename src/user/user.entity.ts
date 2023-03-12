import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import bcrypt from 'bcrypt';
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
  @BeforeInsert()
  async hashpassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
