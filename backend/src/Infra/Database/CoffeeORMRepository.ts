import { Coffee } from '@/Domain/Coffee';
import { CoffeeRepository } from '@/Domain/CoffeeRepository';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

export class CoffeeORMRepository implements CoffeeRepository {
  constructor(
    @Inject('COFFEE_REPOSITORY')
    private repository: Repository<Coffee>,
  ) {}

  async save(coffee: Coffee): Promise<Coffee> {
    return await this.repository.save(coffee);
  }
}
