import { Test, TestingModule } from '@nestjs/testing';
import { UserDetailsMasterController } from './user_details_master.controller';
import { UserDetailsMasterService } from './user_details_master.service';

describe('UserDetailsMasterController', () => {
  let controller: UserDetailsMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDetailsMasterController],
      providers: [UserDetailsMasterService],
    }).compile();

    controller = module.get<UserDetailsMasterController>(UserDetailsMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
