"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _swagger = require("@nestjs/swagger");
const _appmodule = require("./app.module");
const { version, description } = require("../package.json");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    await setupSwagger(app);
    app.useGlobalPipes(new _common.ValidationPipe());
    app.enableCors();
    await app.listen(3001);
}
async function setupSwagger(app) {
    const config = new _swagger.DocumentBuilder().setTitle("TestDB").setDescription(description).setVersion(version).build();
    const document = _swagger.SwaggerModule.createDocument(app, config);
    const persistAuthorizationToken = {
        swaggerOptions: {
            persistAuthorization: true
        }
    };
    _swagger.SwaggerModule.setup("swagger-ui", app, document, persistAuthorizationToken);
}
bootstrap();
