import { Coffee } from './Coffee';

export abstract class CoffeeRepository {
  abstract save(coffee: Coffee): Promise<Coffee>;
}
