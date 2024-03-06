import { Module } from '@nestjs/common';
import { UserDetailsMasterService } from './user_details_master.service';
import { UserDetailsMasterController } from './user_details_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetailsMaster } from './entities/user_details_master.entity';
import { UserAuthMaster } from 'src/user_auth_master/entities/user_auth_master.entity';
import { UserAuthMasterService } from 'src/user_auth_master/user_auth_master.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserDetailsMaster,UserAuthMaster])],
  controllers: [UserDetailsMasterController],
  providers: [UserDetailsMasterService,UserAuthMasterService],
})
export class UserDetailsMasterModule {}
