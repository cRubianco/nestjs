import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Constants } from "./utils/constants";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const confService = app.get(ConfigService);
  // Server port
  const port  = +confService.get<number>(Constants.SERVER_PORT) || 3000;
  await app.listen(port);
  console.log(`Server istening on port ${await app.getUrl()}`);
}
bootstrap();
