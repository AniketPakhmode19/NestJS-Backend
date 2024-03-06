import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserRolesMasterDto {
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(45)
    readonly role_name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly role_description: string;

    readonly crtupddate: String; 
}
