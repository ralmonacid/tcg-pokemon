import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { CardEntity } from './entities/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private cardEntity:Repository<CardEntity>
  ){}

  create(createCardDto: CreateCardDto) {
    return 'This action adds a new card';
  }

  //Lista todas las cartas, sin ningun tipo de filtro
  async findAll() {
    return await this.cardEntity.find();
  }

  /** Lista las cartas por medio del set
    * imput: idSet(string)
    * output: object
  */ 
  async findAllSet(idSet: string){
    return await this.cardEntity.find({
      relations:{
        imageEntity:true,
        marketEntity:true
      },
      where:{
        set_id:idSet
      }
    })
  }

  /** Lista una carta por medio del id
    * input:id(string)
    * output: object
  */
  async findOne(id: string) {
    return await this.cardEntity.findOneBy({id:id});
  }

}