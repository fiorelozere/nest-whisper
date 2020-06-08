import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config'
import * as helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serverConfig = config.get('server') ;
  app.use(helmet());
  await app.listen(process.env.PORT || serverConfig.port);

}
bootstrap();
