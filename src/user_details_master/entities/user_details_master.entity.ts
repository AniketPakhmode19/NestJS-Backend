import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserRolesMaster } from 'src/user_roles_master/entities/user_roles_master.entity';

@Entity()
export class UserDetailsMaster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, name:'login_id' })
  loginId: string;

  @Column({ nullable: false, name:'first_name' })
  firstName: string;

  @Column({ nullable: false })
  dob: string;
  
  @ManyToOne(()=>UserRolesMaster)
  @JoinColumn({name:"user_role"})
  @Column({ nullable: false, name:'user_role' })
  userRole: number;

  @Column({ nullable: false, name:'last_name' })
  lastName: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  dp: string;

  @Column({ nullable: false, name:'crt_src_ip' })
  crtSrcIp: string;

  @Column({ nullable: false, name:'upd_src_ip' })
  updSrcIp: string;

  @Column({ nullable: false, name:'isactive' })
  isActive: number;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  crtdate: Date;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  upddate: Date;

}
