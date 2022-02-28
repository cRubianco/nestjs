import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Constants } from "./utils/constants";
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(Constants.DB.DB_HOST),
        port: +configService.get<number>(Constants.DB.DB_PORT),
        database: configService.get<string>(Constants.DB.DB_DATABASE),
        username: configService.get<string>(Constants.DB.DB_USER),
        password: configService.get<string>(Constants.DB.DB_PASSWORD),
        // entities: [__dirname + '/../**/*.entity.ts'],
        // entities: [join(__dirname, '**', '*.entity.{ts,js}')]
        // entities: [__dirname + '**', '*.entity.{ts,js}'],
        entities:[__dirname + '/**/*.entity.{ts,js}'],
        synchronize: true,
        logging: false,
      }),
      inject: [ConfigService],
    }),
    AppModule,
    TasksModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
