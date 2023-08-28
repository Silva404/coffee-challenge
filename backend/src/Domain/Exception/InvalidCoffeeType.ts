export class InvalidCoffeeType extends Error {
  constructor(type: string) {
    super(`${type} is an invalid coffee type, it should be Arabic OR Robusta.`);
    this.name = 'InvalidCoffeeType';
  }
}
