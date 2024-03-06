import { Test, TestingModule } from '@nestjs/testing';
import { UserRolesMasterController } from './user_roles_master.controller';
import { UserRolesMasterService } from './user_roles_master.service';

describe('UserRolesMasterController', () => {
  let controller: UserRolesMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRolesMasterController],
      providers: [UserRolesMasterService],
    }).compile();

    controller = module.get<UserRolesMasterController>(UserRolesMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
