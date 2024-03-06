import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRolesMasterModule } from './user_roles_master/user_roles_master.module';
import { UserDetailsMasterModule } from './user_details_master/user_details_master.module';
import { UserAuthMasterModule } from './user_auth_master/user_auth_master.module';
import { UserRolesMaster } from './user_roles_master/entities/user_roles_master.entity';
import { UserDetailsMaster } from './user_details_master/entities/user_details_master.entity';
import { UserAuthMaster } from './user_auth_master/entities/user_auth_master.entity';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './exceptions/all-exceptions.filter';
import { ViewModule } from './view/view.module';
import { UserDetailView } from './view/entities/view.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'infodatabase',
      entities: [UserRolesMaster, UserDetailsMaster, UserAuthMaster, UserDetailView],
      synchronize: false,
    }),
    UserRolesMasterModule,
    UserDetailsMasterModule,
    UserAuthMasterModule,
    ViewModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
