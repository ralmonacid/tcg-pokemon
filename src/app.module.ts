import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetModule } from './set/set.module';
import { CardModule } from './card/card.module';
import { ConfigService } from '@nestjs/config';
import { ImageModule } from './image/image.module';
import { MarketModule } from './market/market.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: "postgres",
    host: process.env.DB_HOST,
    username: 'mycrosystem',
    password: 'mycrosystem',
    port: 5432,
    database: process.env.DB_NAME,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: false }), SetModule, CardModule, ImageModule, MarketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

