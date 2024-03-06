import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDetailsMasterDto } from './dto/create-user_details_master.dto';
import { UpdateUserDetailsMasterDto } from './dto/update-user_details_master.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetailsMaster } from './entities/user_details_master.entity';
import { Repository } from 'typeorm';
import { UserAuthMasterService } from 'src/user_auth_master/user_auth_master.service';
import { CreateUserAuthMasterDto } from 'src/user_auth_master/dto/create-user_auth_master.dto';

@Injectable()
export class UserDetailsMasterService {

  private readonly logger = new Logger(UserDetailsMasterService.name)

  constructor(
    @InjectRepository(UserDetailsMaster)
    private readonly userDetailRepository:Repository<UserDetailsMaster>,
    private readonly userAuthService:UserAuthMasterService
  ){}

  async findAll(): Promise<UserDetailsMaster[]> {
    try {
      this.logger.log('GETTING ALL USER_DETAILS');
      return await this.userDetailRepository.find();
    } catch (error) {
      this.logger.error(`Error occurred while retrieving all user details: ${error.message}`);
      throw new Error('Could not retrieve user details');
    }
  }

  async findOne(id: number): Promise<UserDetailsMaster> {
    try {
      this.logger.log('GETTING THE USER_DETAILS WITH ID:' + id);
      const userDetail = await this.userDetailRepository.findOne({ where: { id } });
      if (!userDetail) {
        throw new NotFoundException(`User details with ID ${id} not found`);
      }
      return userDetail;
    } catch (error) {
      this.logger.error(`Error occurred while retrieving user details with ID ${id}: ${error.message}`);
      throw new Error(`Could not retrieve user details with id ${id}`);
    }
  }

  async create(createUserDetailsMasterDto: CreateUserDetailsMasterDto): Promise<UserDetailsMaster> {
    try {
      const user = await this.userDetailRepository.save(createUserDetailsMasterDto);
      const authUser : CreateUserAuthMasterDto = {
        "id": user.id,
        "userPassword": createUserDetailsMasterDto.userPassword,
        "userChangePassword": createUserDetailsMasterDto.userChangePassword,
      }
      this.userAuthService.create(authUser);
      this.logger.log('CREATED A NEW USER_DETAILS');
      return user;
    } catch (error) {
      this.logger.error(`Error occurred while creating user details: ${error.message}`);
      throw new InternalServerErrorException('Could not create user details');
    }
  }

  async update(id: number, updateUserDetailsMasterDto: UpdateUserDetailsMasterDto): Promise<UserDetailsMaster> {
    try {
      this.logger.log('UPDATED THE USER_DETAIL WITH ID:' + id);
      await this.userDetailRepository.update(id, updateUserDetailsMasterDto);
      return this.userDetailRepository.findOne({ where: { id } });
    } catch (error) {
      this.logger.error(`Error occurred while updating user details with ID ${id}: ${error.message}`);
      throw new InternalServerErrorException('Could not update user details');
    }
  }

  async remove(id: number) {
    try {
      this.logger.log('DELETED THE USER_DETAIL WITH ID:' + id);
      await this.userDetailRepository.delete(id);
    } catch (error) {
      this.logger.error(`Error occurred while deleting user details with ID ${id}: ${error.message}`);
      throw new InternalServerErrorException('Could not delete user details');
    }
  }
}
