import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserAuthMasterService } from './user_auth_master.service';
import { CreateUserAuthMasterDto } from './dto/create-user_auth_master.dto';
import { UpdateUserAuthMasterDto } from './dto/update-user_auth_master.dto';

@Controller('userauth')
export class UserAuthMasterController {

  constructor(private readonly userAuthMasterService: UserAuthMasterService) {}

  @Get()
  findAll() {
    return this.userAuthMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userAuthMasterService.findOne(id);
  }

  @Post()
  create(@Body() createUserAuthMasterDto: CreateUserAuthMasterDto) {
    return this.userAuthMasterService.create(createUserAuthMasterDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserAuthMasterDto: UpdateUserAuthMasterDto) {
    return this.userAuthMasterService.update(+id, updateUserAuthMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAuthMasterService.remove(+id);
  }
}
