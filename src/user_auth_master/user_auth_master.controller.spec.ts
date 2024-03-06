import { Test, TestingModule } from '@nestjs/testing';
import { UserAuthMasterController } from './user_auth_master.controller';
import { UserAuthMasterService } from './user_auth_master.service';

describe('UserAuthMasterController', () => {
  let controller: UserAuthMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAuthMasterController],
      providers: [UserAuthMasterService],
    }).compile();

    controller = module.get<UserAuthMasterController>(UserAuthMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
