import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
