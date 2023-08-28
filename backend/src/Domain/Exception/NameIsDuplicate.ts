export class NameIsDuplicate extends Error {
  constructor(name: string) {
    super(
      `Name: '${name.toString()}' is already taken, please choose another name.`,
    );
    this.name = 'Name is duplicate';
  }
}
