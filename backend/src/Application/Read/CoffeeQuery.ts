import { Coffee, CoffeeType } from '@/Domain/Coffee';

export type CoffeeCriteria = {
  type?: CoffeeType;
  name?: string;
};
export abstract class CoffeeQuery {
  abstract findBy(criteria: CoffeeCriteria): Promise<Array<Coffee>>;
}
