import { Module } from '@nestjs/common';
import { UserAuthMasterService } from './user_auth_master.service';
import { UserAuthMasterController } from './user_auth_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuthMaster } from './entities/user_auth_master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserAuthMaster])],
  controllers: [UserAuthMasterController],
  providers: [UserAuthMasterService],
})
export class UserAuthMasterModule {}
