import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Config } from "./config/configuration";
import { UserModule } from "./resources/user/user.module";
import { CacheModule } from "@nestjs/cache-manager";

@Module({
  imports: [
    MongooseModule.forRoot(Config.DB_CONFIG.URL),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
