import { Name } from '@/Domain/Name';
import { DuplicateNameCheck } from './DuplicateNameCheck';
import { NameIsDuplicate } from '@/Domain/Exception/NameIsDuplicate';

test('should validate name against duplicate name error check', () => {
  let name = 'cappucino';
  const duplicateNameCheck = new DuplicateNameCheck([
    'Cappucino',
    'Frapuccino',
  ]);
  expect(() => duplicateNameCheck.check(new Name(name))).toThrowError(
    new NameIsDuplicate('Cappucino'),
  );

  name = 'Something else';
  expect(() => duplicateNameCheck.check(new Name(name))).not.toThrowError(
    new NameIsDuplicate(name),
  );
});
