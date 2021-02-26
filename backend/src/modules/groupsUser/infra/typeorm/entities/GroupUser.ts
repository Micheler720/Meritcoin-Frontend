import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('groups_user')
class GroupUser {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column('boolean')
  ativo: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default GroupUser;
