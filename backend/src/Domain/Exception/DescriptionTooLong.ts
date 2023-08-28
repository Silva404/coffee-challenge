export class DescriptionTooLong extends Error {
  constructor() {
    super('Description is too long, should be at max 255 characters');
    this.name = 'DescriptionTooLong';
  }
}
