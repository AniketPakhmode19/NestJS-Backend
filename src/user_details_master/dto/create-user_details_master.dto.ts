import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDetailsMasterDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly login_id: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    first_name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    dob: string;

    @IsNotEmpty()
    @IsInt() 
    user_role: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    last_name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    gender: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    dp: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    crt_src_ip: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    upd_src_ip: string;

    @IsNotEmpty()
    @IsInt() 
    isactive: number;

    @IsNotEmpty()
    @IsString()
    userPassword: string;

    @IsNotEmpty()
    @IsInt() 
    userChangePassword: number;
}
