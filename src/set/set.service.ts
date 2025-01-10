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
  async create(createSetDto: CreateSetDto) {
    const createSet = new SetEntity()
    createSet.id = createSetDto.id;
    createSet.logo_url = createSetDto.logo_url;
    createSet.name = createSetDto.name;
    createSet.printed_total = createSetDto.printed_total;
    createSet.ptcgo_code = createSetDto.ptcgo_code;
    createSet.release_date = createSetDto.release_date;
    createSet.series = createSetDto.series;
    createSet.symbol_url = createSetDto.symbol_url;
    createSet.total = createSetDto.total;
    createSet.updated_at = createSetDto.updated_at
    return await this.setEntity.save(createSet);
  }

  //Listar todos los set
  async findAll() {
    return await this.setEntity.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} set`;
  }
}
