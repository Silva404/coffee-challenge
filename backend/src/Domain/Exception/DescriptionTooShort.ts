export class DescriptionTooShort extends Error {
  constructor() {
    super('Description is too short, should contain at least 5 characters');
    this.name = 'DescriptionTooShort';
  }
}
