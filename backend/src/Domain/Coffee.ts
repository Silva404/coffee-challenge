import { UUID, randomUUID } from 'crypto';
import { Price } from './Price';
import { InvalidCoffeeType } from './Exception/InvalidCoffeeType';
import { DescriptionTooLong } from './Exception/DescriptionTooLong';
import { DescriptionTooShort } from './Exception/DescriptionTooShort';
import { Name } from './Name';
import { Column, Entity, PrimaryColumn } from 'typeorm';

export type CoffeeProps = {
  name: Name;
  description: string;
  price: Price;
  type: CoffeeType;
  image: URL;
};

const availableTypes = ['Robusta', 'Arabic'] as const;

export type CoffeeType = (typeof availableTypes)[number];

@Entity()
export class Coffee {
  private readonly AVAILABLE_TYPES = availableTypes;

  @PrimaryColumn('uuid')
  public id: UUID;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public image: string;

  @Column()
  public price: number;

  @Column()
  public type: string;

  constructor(private props: CoffeeProps, id?: UUID) {
    this.validate();
    this.id = id ?? randomUUID();
    this.name = props.name.toString();

    this.description = props.description;
    this.type = props.type;
    this.image = props.image.toString();
    this.price = props.price.amount;
  }

  private validate() {
    if (this.props.description.length <= 5) {
      throw new DescriptionTooShort();
    }

    if (this.props.description.length >= 255) {
      throw new DescriptionTooLong();
    }

    if (!this.AVAILABLE_TYPES.includes(this.props.type)) {
      throw new InvalidCoffeeType(this.props.type);
    }
  }
}
