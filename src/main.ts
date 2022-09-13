import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './commons/filters';
import { setupSwagger } from './commons/utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const configService = app.get(ConfigService);
  const PORT = configService.get('SERVER_PORT');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  setupSwagger(app);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(PORT);

  if (configService.get('NODE_ENV') === 'development') {
    Logger.log(
      `Application running on port ${PORT}, http://localhost:${PORT}/api`,
    );
    Logger.log(`Go to API Docs : http://localhost:${PORT}/api/swagger`);
  }
}
bootstrap();
