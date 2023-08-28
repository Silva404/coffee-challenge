import { Module } from '@nestjs/common';
import { ormProviders } from './orm.providers';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...ormProviders],
  exports: [...ormProviders],
})
export class ORMModule {}
