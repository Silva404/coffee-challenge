import { Name } from '@/Domain/Name';

export abstract class NameCheck {
  abstract check(name: Name): void;
}
