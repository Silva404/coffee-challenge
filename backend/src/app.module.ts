import { Module } from '@nestjs/common';
import { CoffeeModule } from '@/UserInterface/Controller/coffee.module';
import { envSchema } from './env';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    CoffeeModule,
  ],
})
export class AppModule {}
