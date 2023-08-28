import { Name } from '@/Domain/Name';
import { NameCheck } from './NameCheck';

export class NameErrorChecking {
  constructor(private readonly checks: Array<NameCheck>) {}

  public async check(name: Name): Promise<Name> {
    for (const check of this.checks) {
      check.check(name);
    }

    return name;
  }
}
