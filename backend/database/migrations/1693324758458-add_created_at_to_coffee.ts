import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCreatedAtToCoffee1693324758458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'coffee',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('coffee', 'created_at');
  }
}
