export class NameTooLong extends Error {
  constructor() {
    super('Name is too long, should be at max 55 characters');
    this.name = 'NameTooLong';
  }
}
