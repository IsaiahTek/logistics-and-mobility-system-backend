import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() =>
    console.log(
      'Application is running on: ' +
        (process.env.PORT ?? 3000) +
        '/' +
        'api/v1',
    ),
  )
  .catch((err) => console.error('Error starting application: ', err));
