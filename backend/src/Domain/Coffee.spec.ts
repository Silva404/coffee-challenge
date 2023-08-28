import { Coffee, CoffeeProps, CoffeeType } from './Coffee';
import { DescriptionTooLong } from './Exception/DescriptionTooLong';
import { DescriptionTooShort } from './Exception/DescriptionTooShort';
import { Name } from './Name';
import { Price } from './Price';

function coffeeObjectMother(props?: Partial<CoffeeProps>): Coffee {
  return new Coffee({
    name: new Name('cappucino'),
    description: 'Great coffee',
    price: new Price(1),
    type: 'Robusta' as CoffeeType,
    image: new URL('http://fake-cdn/coffee.png'),
    ...props,
  });
}
describe('Coffee', () => {
  test('should be able to create a coffee', () => {
    const coffee = coffeeObjectMother();
    expect(coffee).toBeTruthy();
  });

  test('description should have at least 5 characters', () => {
    expect(() => coffeeObjectMother({ description: 'lil' })).toThrowError(
      new DescriptionTooShort(),
    );
  });

  test('description cant be longer than 255 characters', () => {
    const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod laoreet turpis, tincidunt condimentum nisl ultrices et. Cras auctor libero sed ex aliquam, ac aliquam ante rutrum. Aenean cursus et felis id pellentesque. Morbi dictum sodales magna ultricies egestas. Vestibulum ac tortor vel tortor euismod mollis eu sit amet magna. Donec dapibus mollis tincidunt. Sed enim libero, ornare semper enim ut, pretium luctus dui. Duis vehicula at est ac dapibus. Maecenas aliquet est id erat tempus, at tempor odio rutrum. Praesent odio dolor, finibus eget porta ultricies, posuere sed libero. Mauris ultrices rutrum ullamcorper. In ligula lacus, dictum eget mauris quis, eleifend malesuada massa. Vestibulum efficitur velit fringilla, vestibulum elit accumsan, placerat metus. Integer at lacus id libero luctus tempor. Nam ac lorem massa.
Curabitur a commodo sapien. Suspendisse pulvinar turpis semper porttitor tincidunt. Ut venenatis urna vel elit dignissim aliquet. Nulla vulputate risus ut orci auctor, id placerat velit pellentesque. Sed nec ex massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eu elit vitae ante venenatis rutrum. Suspendisse non luctus augue. In a ante nisi. Morbi venenatis libero id ligula vulputate ultricies. Suspendisse ut hendrerit est. In vel placerat urna. Fusce egestas diam sed est ornare, id lacinia massa aliquet. Sed nisl arcu, facilisis et convallis quis, malesuada vitae sem. Proin sollicitudin enim vel vehicula tincidunt. Proin mauris leo, vulputate at neque non, porta pharetra felis.
Donec dolor sapien, facilisis lobortis ipsum ac, fringilla auctor nibh. Proin eget pretium mauris. Quisque placerat, tellus eget tempor cursus, purus sapien ultricies elit, in. `;
    expect(() => coffeeObjectMother({ description })).toThrowError(
      new DescriptionTooLong(),
    );
  });
});
