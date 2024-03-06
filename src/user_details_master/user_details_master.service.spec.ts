import { Test, TestingModule } from '@nestjs/testing';
import { UserDetailsMasterService } from './user_details_master.service';

describe('UserDetailsMasterService', () => {
  let service: UserDetailsMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDetailsMasterService],
    }).compile();

    service = module.get<UserDetailsMasterService>(UserDetailsMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
