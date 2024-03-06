import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  name: 'vw_user_details',
  expression: `
    SELECT
      ud.id AS id,
      ud.login_id AS login_id,
      ua.user_password AS user_pass,
      ud.first_name AS first_name,
      ud.last_name AS last_name,
      ur.role_name AS role_name,
      ud.dob AS dob,
      ud.dp AS dp,
      ud.gender AS gender,
      ud.isactive AS isactive,
      ua.user_changepass AS user_changepass
    FROM
      user_details_master ud
    JOIN
      user_auth_master ua ON ua.id = ud.id
    JOIN
      user_roles_master ur ON ur.id = ud.user_role
  `,
})
export class UserDetailView {
  @ViewColumn()
  id: number;

  @ViewColumn({name:'login_id'})
  loginId: string;

  @ViewColumn({name:'user_pass'})
  userPassword: string;

  @ViewColumn({name:'first_name'})
  firstName: string;

  @ViewColumn({name:'last_name'})
  lastName: string;

  @ViewColumn({name:'role_name'})
  roleName: string;

  @ViewColumn()
  dob: Date;

  @ViewColumn()
  dp: string;

  @ViewColumn()
  gender: string;

  @ViewColumn({name:'isactive'})
  isActive: number;

  @ViewColumn({name:'user_changepass'})
  userChangePassword: number;
}
