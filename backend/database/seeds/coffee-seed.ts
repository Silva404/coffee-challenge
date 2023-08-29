import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Coffee } from '../../src/Domain/Coffee';
import { Name } from '../../src/Domain/Name';
import { Price } from '../../src/Domain/Price';

export default class CoffeeSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Coffee);
    const coffees = Array(6)
      .fill(null)
      .map(
        (_, idx) =>
          new Coffee({
            name: new Name(faker.lorem.word(8)),
            description: faker.lorem.words(5),
            image: new URL(faker.internet.url()),
            type: idx % 2 == 0 ? 'Robusta' : 'Arabic',
            price: new Price(faker.number.int({ min: 1, max: 20 })),
          }),
      );
    await repository.insert(coffees);
  }
}
