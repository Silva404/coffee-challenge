export class InvalidCurrency extends Error {
  constructor(currency: string) {
    super(`${currency} is an invalid Currency.`);
    this.name = 'InvalidCurrency';
  }
}
