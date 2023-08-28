import { CoffeeQuery } from '@/Application/Read/CoffeeQuery';
import { CreateCoffeeHandler } from '@/Application/Write/CreateCoffeeHandler';
import { CoffeeType } from '@/Domain/Coffee';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CreateCoffeeCommand } from 'src/Application/Write/CreateCoffeeCommand';

@Controller()
export class CoffeeController {
  constructor(
    private readonly createCoffeeHandler: CreateCoffeeHandler,
    private readonly coffeeQuery: CoffeeQuery,
  ) {}

  @Get('/coffee')
  async get(@Query() query: { type?: CoffeeType; name?: string }) {
    return await this.coffeeQuery.findBy(query);
  }

  @Post('/coffee')
  async createCoffee(@Body() body: CreateCoffeeCommand) {
    try {
      return await this.createCoffeeHandler.handle(body);
    } catch (e) {
      if (e instanceof Error) {
        const name = e.name;
        throw new HttpException(
          { error: HttpStatus.FORBIDDEN, message: { [name]: e.message } },
          HttpStatus.FORBIDDEN,
        );
      }
    }
  }
}
