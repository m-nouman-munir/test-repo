import { INestApplication, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

const { version, description } = require("../package.json");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3001);
}

async function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle("TestDB")
    .setDescription(description)
    .setVersion(version)

    .build();
  const document = SwaggerModule.createDocument(app, config);
  const persistAuthorizationToken = {
    swaggerOptions: {
      persistAuthorization: true,
    },
  };
  SwaggerModule.setup("swagger-ui", app, document, persistAuthorizationToken);
}
bootstrap();
