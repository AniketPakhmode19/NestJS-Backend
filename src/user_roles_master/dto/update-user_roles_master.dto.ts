import { IsOptional, IsString, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRolesMasterDto } from './create-user_roles_master.dto';

export class UpdateUserRolesMasterDto extends PartialType(CreateUserRolesMasterDto) {
    
    @IsOptional()
    @IsString()
    @MaxLength(45)
    readonly role_name?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    readonly role_description?: string;

}
