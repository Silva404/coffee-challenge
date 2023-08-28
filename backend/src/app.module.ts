import { Module } from '@nestjs/common';
import { CoffeeModule } from '@/UserInterface/Controller/coffee.module';
import { envSchema } from './env';
import { ConfigModule } from '@nestjs/config';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),

    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    CoffeeModule,
  ],
})
export class AppModule {}
