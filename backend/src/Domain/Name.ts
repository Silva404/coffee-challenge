import { NameTooLong } from './Exception/NameTooLong';
import { NameTooShort } from './Exception/NameTooShort';

export class Name {
  private name: string;

  constructor(name: string) {
    this.validate(name);
    this.name = this.capitalizeFirstLetter(name);
  }

  private validate(name: string): void {
    if (name.length <= 4) {
      throw new NameTooShort(name);
    }

    if (name.length > 55) {
      throw new NameTooLong();
    }
  }

  private capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  public toString(): string {
    return this.name;
  }
}
