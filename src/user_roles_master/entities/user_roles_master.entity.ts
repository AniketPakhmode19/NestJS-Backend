import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class UserRolesMaster {

  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({ nullable: false, name:'role_name' })
  roleName: string;
 
  @Column({ nullable: false, name:'role_description' })
  roleDescription: string;
 
  @Column()
  crtupddate: String;
  
}