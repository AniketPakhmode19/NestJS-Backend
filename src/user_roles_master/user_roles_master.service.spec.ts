import { Test, TestingModule } from '@nestjs/testing';
import { UserRolesMasterService } from './user_roles_master.service';

describe('UserRolesMasterService', () => {
  let service: UserRolesMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRolesMasterService],
    }).compile();

    service = module.get<UserRolesMasterService>(UserRolesMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
