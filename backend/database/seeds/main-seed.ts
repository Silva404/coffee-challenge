import { Seeder, runSeeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import CoffeeSeeder from './coffee-seed';

export default class MainSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await runSeeder(dataSource, CoffeeSeeder);
  }
}
