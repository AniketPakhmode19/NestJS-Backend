import { Test, TestingModule } from '@nestjs/testing';
import { UserAuthMasterService } from './user_auth_master.service';

describe('UserAuthMasterService', () => {
  let service: UserAuthMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAuthMasterService],
    }).compile();

    service = module.get<UserAuthMasterService>(UserAuthMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
