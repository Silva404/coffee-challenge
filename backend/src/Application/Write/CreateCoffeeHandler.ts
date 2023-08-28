import { Coffee, CoffeeType } from '@/Domain/Coffee';
import { CreateCoffeeCommand } from './CreateCoffeeCommand';
import { CoffeeRepository } from '@/Domain/CoffeeRepository';
import { Injectable } from '@nestjs/common';
import { NameErrorChecking } from '@/Domain/ErrorChecking/Name/NameErrorChecking';
import { Name } from '@/Domain/Name';
import { Price } from '@/Domain/Price';

@Injectable()
export class CreateCoffeeHandler {
  constructor(
    private readonly repository: CoffeeRepository,
    private readonly nameErrorChecking: NameErrorChecking,
  ) {}

  async handle(command: CreateCoffeeCommand): Promise<Coffee> {
    const coffee = new Coffee({
      name: await this.nameErrorChecking.check(new Name(command.name)),
      description: command.description,
      price: new Price(command.price),
      type: command.type as CoffeeType,
      image: new URL(command.image),
    });
    return await this.repository.save(coffee);
  }
}
