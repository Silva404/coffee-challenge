import { InvalidCurrency } from './Exception/InvalidCurrency';
import { NegativePrice } from './Exception/NegativePrice';

const availableCurrencies = ['EUR', 'USD'] as const;

export type Currency = (typeof availableCurrencies)[number];

export class Price {
  private readonly AVAILABLE_CURRENCIES = availableCurrencies;

  constructor(
    public readonly amount: number,
    public readonly currency: Currency = 'EUR',
  ) {
    this.validate();
  }

  private validate(): void {
    if (this.amount <= 0) {
      throw new NegativePrice();
    }

    if (!this.AVAILABLE_CURRENCIES.includes(this.currency)) {
      throw new InvalidCurrency(this.currency);
    }
  }
}
