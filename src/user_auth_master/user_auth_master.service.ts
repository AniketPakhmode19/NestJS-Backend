import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserAuthMasterDto } from './dto/create-user_auth_master.dto';
import { UpdateUserAuthMasterDto } from './dto/update-user_auth_master.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAuthMaster } from './entities/user_auth_master.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserAuthMasterService {

  private readonly logger = new Logger(UserAuthMasterService.name);

  constructor(
    @InjectRepository(UserAuthMaster)
    private readonly userAuthRepository: Repository<UserAuthMaster>
  ) { }

  saltOrRounds: number = 10;

  async findAll(): Promise<UserAuthMaster[]> {
    try {
      this.logger.log('GETTING ALL USER_AUTH');
      return await this.userAuthRepository.find();
    } catch (error) {
      this.logger.error(`Error occurred while retrieving all user auth: ${error.message}`);
      throw new InternalServerErrorException('Could not retrieve user auth');
    }
  }

  async findOne(id: number): Promise<UserAuthMaster> {
    try {
      this.logger.log('GETTING THE USER_AUTH WITH ID:' + id);
      const userAuth = await this.userAuthRepository.findOne({ where: { id } });
      if (!userAuth) {
        throw new NotFoundException(`User auth with ID ${id} not found`);
      }
      return userAuth;
    } catch (error) {
      this.logger.error(`Error occurred while retrieving user auth with ID ${id}: ${error.message}`);
      throw new InternalServerErrorException('Could not retrieve user auth');
    }
  }

  async create(createUserAuthMasterDto: CreateUserAuthMasterDto): Promise<UserAuthMaster> {
    try {
      const hashPassword = await bcrypt.hash(createUserAuthMasterDto.userPassword, this.saltOrRounds);
      const newUserAuthData = {
        ...createUserAuthMasterDto,
        userPassword: hashPassword,
      };
      const detail = await this.userAuthRepository.save(newUserAuthData);
      this.logger.log('CREATED A NEW USER_AUTH');
      return detail;
    }
    catch (error) {
      this.logger.error(`Error occurred while creating user auth: ${error.message}`);
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, updateUserAuthMasterDto: UpdateUserAuthMasterDto): Promise<UserAuthMaster> {
    try {
      this.logger.log('UPDATED THE USER_AUTH WITH ID:' + id);
      const getUser = await this.userAuthRepository.findOne({ where: { id: id } });
      if (!getUser) {
        throw new NotFoundException('User auth not found');
      }
      const hashPassword = await bcrypt.hash(updateUserAuthMasterDto.user_password, this.saltOrRounds);
      const updatedData = {
        ...getUser,
        user_password: hashPassword,
      };
      await this.userAuthRepository.update(id, updatedData);
      return this.userAuthRepository.findOne({ where: { id: id } });
    }
    catch (error) {
      this.logger.error(`Error occurred while updating user auth with ID ${id}: ${error.message}`);
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException('Could not update user auth');
      }
    }
  }

  async remove(id: number): Promise<void> {
    try {
      this.logger.log('DELETED USER_AUTH WITH ID:' + id);
      await this.userAuthRepository.delete(id);
    } catch (error) {
      this.logger.error(`Error occurred while deleting user auth with ID ${id}: ${error.message}`);
      throw new InternalServerErrorException('Could not delete user auth');
    }
  }
}
