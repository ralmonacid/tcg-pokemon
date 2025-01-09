import { Injectable } from '@nestjs/common';
import { CreateSetDto } from './dto/create-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SetEntity } from './entities/set.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SetService {
  constructor(
    @InjectRepository(SetEntity)
    private setEntity:Repository<SetEntity>
  ){}

  //Listar todos los set
  async findAll() {
    return await this.setEntity.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} set`;
  }
}
