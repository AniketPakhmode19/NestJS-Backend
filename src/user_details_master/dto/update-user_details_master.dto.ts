import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDetailsMasterDto } from './create-user_details_master.dto';

export class UpdateUserDetailsMasterDto extends PartialType(CreateUserDetailsMasterDto) {
   
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly login_id?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly first_name?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    readonly dob?: string;

    @IsInt()
    readonly user_role?: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly last_name?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    readonly gender?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly dp?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly crt_src_ip?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly upd_src_ip?: string;

    @IsInt()
    readonly isactive?: number;

    readonly crtdate?: Date;

    readonly upddate?: Date;
}
