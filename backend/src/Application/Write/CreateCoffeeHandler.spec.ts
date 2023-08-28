import { NameErrorChecking } from '@/Domain/ErrorChecking/Name/NameErrorChecking';
import { CreateCoffeeCommand } from './CreateCoffeeCommand';
import { CreateCoffeeHandler } from './CreateCoffeeHandler';
import { CoffeeRepository } from '@/Domain/CoffeeRepository';

describe('CreateCoffeeHandler', () => {
  test('Should handle the case to create a new cofffe', async () => {
    const repository: CoffeeRepository = {
      save: jest.fn(),
    };
    const command: CreateCoffeeCommand = {
      name: 'Cappuccino',
      type: 'Arabic',
      description: 'Great coffee',
      price: 12,
      image: 'http://fake-cdn/cappuccino.png',
    };
    const nameErrorChecking = new NameErrorChecking([]);
    const handler = new CreateCoffeeHandler(repository, nameErrorChecking);
    await handler.handle(command);
    expect(repository.save).toHaveBeenCalledTimes(1);
  });
});
