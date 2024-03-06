import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserRolesMasterDto } from './dto/create-user_roles_master.dto';
import { UpdateUserRolesMasterDto } from './dto/update-user_roles_master.dto';
import { Repository } from 'typeorm';
import { UserRolesMaster } from './entities/user_roles_master.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRolesMasterService {

  private readonly logger = new Logger(UserRolesMasterService.name);

  constructor(
    @InjectRepository(UserRolesMaster)
    private readonly userRoleRepository:Repository<UserRolesMaster>
  ){}

  async findAll(): Promise<UserRolesMaster[]> {
    try {
      this.logger.log('GETTING ALL USER_ROLE');
      return this.userRoleRepository.find();
    } catch (error) {
      this.logger.error(`Error occurred while retrieving all user roles: ${error.message}`);
      throw new InternalServerErrorException('Could not retrieve user roles');
    }
  }

  async findOne(id: number): Promise<UserRolesMaster> {
    const userRole = await this.userRoleRepository.findOne({ where: { id } });
    this.logger.log(`FOUND USER ROLE WITH ID ${id}`);
    if (!userRole) {
      this.logger.error(`USER ROLE WITH ${id} NOT FOUND`)
      throw new NotFoundException(`User role with ID ${id} not found`);
    }
    return userRole;
  }
  
  async create(createUserRoleDto: CreateUserRolesMasterDto): Promise<UserRolesMaster> {
    try {
      this.logger.log('CREATED A NEW USER_ROLE');
      return this.userRoleRepository.save(createUserRoleDto);
    } catch (error) {
      this.logger.error(`Error occurred while creating user role: ${error.message}`);
      throw new InternalServerErrorException('Could not create user role');
    }
  }

  async update(id: number, updateUserRoleDto: UpdateUserRolesMasterDto): Promise<UserRolesMaster> {
    try {
      this.logger.log('UPDATED THE USER_ROLE WITH ID:' + id);
      await this.userRoleRepository.update(id, updateUserRoleDto);
      return this.userRoleRepository.findOne({ where: { id } });
    } catch (error) {
      this.logger.error(`Error occurred while updating user role with ID ${id}: ${error.message}`);
      throw new InternalServerErrorException('Could not update user role');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      this.logger.log('DELETED THE USER_ROLE WITH ID:' + id);
      await this.userRoleRepository.delete(id);
    } catch (error) {
      this.logger.error(`Error occurred while deleting user role with ID ${id}: ${error.message}`);
      throw new InternalServerErrorException('Could not delete user role');
    }
  }
}
