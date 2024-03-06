import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAuthMasterDto } from './create-user_auth_master.dto';

export class UpdateUserAuthMasterDto extends PartialType(CreateUserAuthMasterDto) {
    
    @IsNotEmpty()
    @IsString()
    readonly user_password?: string;

    @IsNotEmpty()
    @IsNumber()
    readonly user_changepass?: number;
}
