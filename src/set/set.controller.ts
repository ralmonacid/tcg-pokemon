import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SetService } from './set.service';
import { CreateSetDto } from './dto/create-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';

@Controller('set')
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Post()
  async create(@Body() createSetDto: CreateSetDto) {
    return await this.setService.create(createSetDto);
  }

  @Get('list')
  async findAll() {
    return await this.setService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setService.findOne(+id);
  }
}
