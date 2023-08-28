export class NameTooShort extends Error {
  constructor(name: string) {
    super(`${name} is too short, should contain at least 3 characters`);
    this.name = 'NameTooShort';
  }
}
