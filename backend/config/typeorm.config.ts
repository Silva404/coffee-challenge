import MainSeeder from '../database/seeds/main-seed';
import { Coffee } from '../src/Domain/Coffee';
import { ConfigService } from '@nestjs/config';
import { CreateCoffeeTable1693268891963 } from '../database/migrations/1693268891963-create_coffee_table';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

import { SeederOptions } from 'typeorm-extension';
import { AddCreatedAtToCoffee1693324758458 } from '../database/migrations/1693324758458-add_created_at_to_coffee';
config();

const configService = new ConfigService();

console.log(__dirname);
const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  url: configService.getOrThrow('DATABASE_URL'),
  entities: [Coffee],
  migrations: [
    CreateCoffeeTable1693268891963,
    AddCreatedAtToCoffee1693324758458,
  ],
  entitySkipConstructor: true,
  seeds: [MainSeeder],
};

export default new DataSource(options);
