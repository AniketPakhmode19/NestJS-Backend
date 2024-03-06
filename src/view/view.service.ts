import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateViewDto } from './dto/create-view.dto';
import { UpdateViewDto } from './dto/update-view.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetailView } from './entities/view.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ViewService {

  private readonly logger = new Logger(ViewService.name);

  constructor(
    @InjectRepository(UserDetailView)
    private readonly viewRepositry : Repository<UserDetailView>
  ){}

  async findAll():Promise<UserDetailView[]> {
    this.logger.log('GETTING ALL THE RECORDS FROM VIEW TABLE')
    return await this.viewRepositry.find();
  }

  async findOne(id: number): Promise<UserDetailView> {
    const userRole = await this.viewRepositry.findOne({ where: { id } });
    this.logger.log(`FOUND USER ROLE WITH ID ${id}`);
    if (!userRole) {
      this.logger.log(`USER ROLE WITH ${id} NOT FOUND`)
      throw new NotFoundException(`User role with ID ${id} not found`);
    }
    return userRole;
  }

}
