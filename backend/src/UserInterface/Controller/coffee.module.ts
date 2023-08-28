import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CreateCoffeeHandler } from '@/Application/Write/CreateCoffeeHandler';
import { CoffeeORMRepository } from '@/Infra/Database/CoffeeORMRepository';
import { CoffeeRepository } from '@/Domain/CoffeeRepository';
import { CoffeeQuery } from '@/Application/Read/CoffeeQuery';
import { CoffeeQueryORM } from '@/Infra/Database/CoffeeQueryORM';
import { ORMModule } from '@/Infra/Database/orm.modules';
import { NameErrorChecking } from '@/Domain/ErrorChecking/Name/NameErrorChecking';
import { NameErrorCheckingFactory } from '@/Infra/ErrorChecking/NameErrorCheckingFactory';

@Module({
  imports: [ORMModule],
  controllers: [CoffeeController],
  providers: [
    CreateCoffeeHandler,
    {
      provide: CoffeeRepository,
      useClass: CoffeeORMRepository,
    },
    {
      provide: CoffeeQuery,
      useClass: CoffeeQueryORM,
    },
    {
      provide: NameErrorChecking,
      useFactory: (query) => {
        return new NameErrorCheckingFactory(query);
      },
      inject: [CoffeeQuery],
    },
  ],
})
export class CoffeeModule {}
