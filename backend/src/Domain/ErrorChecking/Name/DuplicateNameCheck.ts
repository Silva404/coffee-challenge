import { Name } from '@/Domain/Name';
import { NameCheck } from './NameCheck';
import { NameIsDuplicate } from '@/Domain/Exception/NameIsDuplicate';

export class DuplicateNameCheck implements NameCheck {
  constructor(private readonly nameCollection: Array<string>) {}

  check(name: Name): void {
    for (const coffeeName of this.nameCollection) {
      if (coffeeName === name.toString()) {
        throw new NameIsDuplicate(name.toString());
      }
    }
  }
}
