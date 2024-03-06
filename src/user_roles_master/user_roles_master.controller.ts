import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserRolesMasterService } from './user_roles_master.service';
import { CreateUserRolesMasterDto } from './dto/create-user_roles_master.dto';
import { UpdateUserRolesMasterDto } from './dto/update-user_roles_master.dto';
import { UserRolesMaster } from './entities/user_roles_master.entity';

@Controller('userrole')
export class UserRolesMasterController {

  constructor(private readonly userRolesMasterService: UserRolesMasterService) {}

  @Get()
  findAll(){
    return this.userRolesMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userRolesMasterService.findOne(id);
  }

  @Post()
  create(@Body() createUserRolesMasterDto: CreateUserRolesMasterDto) {
    return this.userRolesMasterService.create(createUserRolesMasterDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserRolesMasterDto: UpdateUserRolesMasterDto) {
    return this.userRolesMasterService.update(id, updateUserRolesMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userRolesMasterService.remove(id);
  }
}
