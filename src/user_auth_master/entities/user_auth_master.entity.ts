import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserDetailsMaster } from 'src/user_details_master/entities/user_details_master.entity';

@Entity() export class UserAuthMaster {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserDetailsMaster)
  @JoinColumn({name:'id'})
  UserDetailsMaster: UserDetailsMaster;

  @Column({ nullable: false, name:'user_password' })
  userPassword: string;

  @Column({ nullable: false, name:'user_changepass' })
  userChangePassword: number;

  @Column({ default: () => "CURRENT_TIMESTAMP" , name:'crtdate'})
  crtDate: Date;

  @Column({ default: () => "CURRENT_TIMESTAMP",name:'upddate' })
  updDate: Date;


  
}
