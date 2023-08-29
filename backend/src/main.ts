import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const isDev = configService.getOrThrow<string>('NODE_ENV') === 'development';

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: isDev
      ? configService.getOrThrow<string>('LOCAL_DOMAIN')
      : configService.getOrThrow<string>('ALLOWED_DOMAIN'),
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}
bootstrap();
