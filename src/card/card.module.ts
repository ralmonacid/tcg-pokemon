import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './entities/card.entity';
import { SetEntity } from 'src/set/entities/set.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CardEntity, SetEntity])],
  controllers: [CardController],
  providers: [CardService],
  exports:[CardService]
})
export class CardModule {}
