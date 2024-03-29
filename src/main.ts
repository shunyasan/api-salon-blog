import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import csurf from 'csurf';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app
    .enableCors
    // local
    // origin: 'http://localhost:3000',
    ();
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('salon-blog')
    .setDescription('')
    .setVersion('1.0')
    .addTag('salon-blog')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();
