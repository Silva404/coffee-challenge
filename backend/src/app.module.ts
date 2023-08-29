import { Module } from '@nestjs/common';
import { CoffeeModule } from '@/UserInterface/Controller/coffee.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CoffeeModule,
  ],
})
export class AppModule {}
