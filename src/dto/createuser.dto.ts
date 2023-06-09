import { IsEmpty, IsNotEmpty } from 'class-validator';
export class CreateUSerDto {
  @IsNotEmpty()
  readonly username: string;
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  readonly password: string;
}
