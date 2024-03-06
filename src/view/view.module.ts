import { Module } from '@nestjs/common';
import { ViewService } from './view.service';
import { ViewController } from './view.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetailView } from './entities/view.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserDetailView])],
  controllers: [ViewController],
  providers: [ViewService],
})
export class ViewModule {}
