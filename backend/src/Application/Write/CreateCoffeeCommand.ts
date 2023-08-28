import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCoffeeCommand {
  @IsNotEmpty()
  readonly name!: string;

  @IsNotEmpty()
  readonly description!: string;

  @IsNotEmpty()
  @IsInt()
  readonly price!: number;

  @IsNotEmpty()
  readonly image!: string;

  @IsNotEmpty()
  readonly type!: string;
}
