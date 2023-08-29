import { CoffeeCriteria, CoffeeQuery } from '@/Application/Read/CoffeeQuery';
import { Coffee } from '@/Domain/Coffee';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

export class CoffeeQueryORM implements CoffeeQuery {
  constructor(
    @Inject('COFFEE_REPOSITORY')
    private repository: Repository<Coffee>,
  ) {}

  async findBy(criteria: CoffeeCriteria): Promise<Coffee[]> {
    return await this.repository.find({
      where: {
        type: criteria.type,
        name: criteria.name,
      },
      take: 6,
      order: { createdAt: 'DESC' },
    });
  }
}
