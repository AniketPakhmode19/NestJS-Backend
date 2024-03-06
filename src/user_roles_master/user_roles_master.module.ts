import { Module } from '@nestjs/common';
import { UserRolesMasterService } from './user_roles_master.service';
import { UserRolesMasterController } from './user_roles_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRolesMaster } from './entities/user_roles_master.entity';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'src/exceptions/all-exceptions.filter';

@Module({
  imports: [TypeOrmModule.forFeature([UserRolesMaster])],
  controllers: [UserRolesMasterController],
  providers: [UserRolesMasterService],
})
export class UserRolesMasterModule { }
