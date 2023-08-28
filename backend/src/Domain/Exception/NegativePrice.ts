export class NegativePrice extends Error {
  constructor() {
    super('Price should not be negative');
    this.name = 'NegativePrice';
  }
}
