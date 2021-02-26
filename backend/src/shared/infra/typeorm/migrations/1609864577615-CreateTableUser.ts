import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateTableUser1609864577615
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'profile_user_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'group_user_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['profile_user_id'],
            referencedColumnNames: ['id'],
            name: 'IdProfileUser',
            referencedTableName: 'profiles_user',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['group_user_id'],
            referencedColumnNames: ['id'],
            name: 'IdGroupUser',
            referencedTableName: 'groups_user',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'IdProfileUser');
    await queryRunner.dropForeignKey('users', 'IdGroupUser');
    await queryRunner.dropTable('users');
  }
}
