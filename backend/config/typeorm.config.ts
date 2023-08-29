import MainSeeder from '../database/seeds/main-seed';
import { Coffee } from '../src/Domain/Coffee';
import { ConfigService } from '@nestjs/config';
import { CreateCoffeeTable1693268891963 } from '../database/migrations/1693268891963-create_coffee_table';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

import { SeederOptions } from 'typeorm-extension';
config();

const configService = new ConfigService();

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  url: configService.getOrThrow('DATABASE_URL'),
  entities: [Coffee],
  migrations: [CreateCoffeeTable1693268891963],
  entitySkipConstructor: true,
  seeds: [MainSeeder],
};

export default new DataSource(options);
