import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common'; //Importamos la ACTIVACION de validaciones
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());   //Activamos las validaciones !!IMPORTANTE ACTIVARLAS!!
  await app.listen(3000);
}
bootstrap();
