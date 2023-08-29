import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCoffeeTable1693268891963 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'coffee',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'name', type: 'varchar' },
          { name: 'description', type: 'varchar' },
          { name: 'price', type: 'int' },
          { name: 'type', type: 'varchar' },
          { name: 'image', type: 'varchar' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('coffee');
  }
}
