import { NestFactory } from "@nestjs/core"
import { ConfigService } from "@nestjs/config"
import { AppModule } from "./app.module"
import { ValidationErrorPipe } from "./pipes/validation-error.pipe"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.setGlobalPrefix("api")
  app.useGlobalPipes(new ValidationErrorPipe())

  const configService = app.get(ConfigService)
  const port = configService.get<number>("PORT") || 3000

  await app.listen(port)
}

bootstrap()
