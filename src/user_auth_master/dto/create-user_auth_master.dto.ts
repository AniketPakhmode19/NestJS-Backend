import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserAuthMasterDto {

  @IsNotEmpty()
  @IsInt()
  id: number;
  
  @IsNotEmpty()
  @IsString()
  userPassword: string;

  @IsNotEmpty()
  @IsInt()
  userChangePassword: number;

}
