import { Module } from '@nestjs/common';
import { SetService } from './set.service';
import { SetController } from './set.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetEntity } from './entities/set.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SetEntity])],
  controllers: [SetController],
  providers: [SetService],
  exports: [SetService]
})
export class SetModule {}
