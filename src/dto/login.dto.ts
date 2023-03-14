import { IsEmpty, IsNotEmpty } from 'class-validator';
export class LoginUSerDto {
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  readonly password: string;
}
