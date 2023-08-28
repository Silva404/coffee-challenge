import { Name } from '@/Domain/Name';
import { CoffeeQuery } from '@/Application/Read/CoffeeQuery';
import { DuplicateNameCheck } from '@/Domain/ErrorChecking/Name/DuplicateNameCheck';
import { Injectable } from '@nestjs/common';
import { NameCheck } from '@/Domain/ErrorChecking/Name/NameCheck';

@Injectable()
export class NameErrorCheckingFactory {
  constructor(private readonly coffeeQuery: CoffeeQuery) {}

  public async check(name: Name): Promise<Name> {
    const coffees = await this.coffeeQuery.findBy({ name: name.toString() });
    const collection = coffees.map((coffee) => coffee.name);
    const duplicateNameCheck = new DuplicateNameCheck(collection);
    const errorChecks: Array<NameCheck> = [duplicateNameCheck];

    for (const errorCheck of errorChecks) {
      errorCheck.check(name);
    }

    return name;
  }
}
