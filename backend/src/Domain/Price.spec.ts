import { InvalidCurrency } from './Exception/InvalidCurrency';
import { NegativePrice } from './Exception/NegativePrice';
import { Currency, Price } from './Price';

describe('Price', () => {
  test('Should be create a valid Price', () => {
    const price = new Price(12, 'EUR');
    expect(price).toBeTruthy();
  });

  test('Should be not be able to create a Price with negative values', () => {
    expect(() => new Price(-12, 'USD')).toThrowError(new NegativePrice());
    expect(() => new Price(0, 'EUR')).toThrowError(new NegativePrice());
  });

  test('Should not be able to use a invalid currency', () => {
    const currency = 'GBP' as Currency;
    expect(() => new Price(1, currency)).toThrowError(
      new InvalidCurrency(currency),
    );
  });
});
