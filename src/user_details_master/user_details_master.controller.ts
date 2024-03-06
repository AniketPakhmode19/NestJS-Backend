import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors } from '@nestjs/common';
import { UserDetailsMasterService } from './user_details_master.service';
import { CreateUserDetailsMasterDto } from './dto/create-user_details_master.dto';
import { UpdateUserDetailsMasterDto } from './dto/update-user_details_master.dto';


@Controller('userdetail')
export class UserDetailsMasterController {

  constructor(private readonly userDetailsMasterService: UserDetailsMasterService) {}

  @Get()
  findAll() {
    return this.userDetailsMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDetailsMasterService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDetailsMasterDto: CreateUserDetailsMasterDto) {
    return this.userDetailsMasterService.create(createUserDetailsMasterDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDetailsMasterDto: UpdateUserDetailsMasterDto) {
    return this.userDetailsMasterService.update(+id, updateUserDetailsMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDetailsMasterService.remove(+id);
  }
}
