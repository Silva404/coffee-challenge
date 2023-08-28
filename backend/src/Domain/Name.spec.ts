import { NameTooLong } from './Exception/NameTooLong';
import { NameTooShort } from './Exception/NameTooShort';
import { Name } from './Name';

describe('Name', () => {
  test('name should have at least 3 characters', () => {
    const name = 'ca';
    expect(() => new Name(name)).toThrowError(new NameTooShort(name));
  });

  test('name should not be longer than 55 characters', () => {
    expect(
      () =>
        new Name(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia',
        ),
    ).toThrowError(new NameTooLong());
  });

  test('should create a valid name and capitalize the first letter', () => {
    const name = new Name('cappucino');
    expect(name.toString()).toEqual('Cappucino');
  });
});
