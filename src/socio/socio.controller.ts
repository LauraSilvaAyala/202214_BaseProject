import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { SocioDto } from './socio.dto';
import { SocioEntity } from './socio.entity';
import { SocioService } from './socio.service';

@Controller('members')
export class SocioController {
  constructor(private readonly socioService: SocioService) {}

  @Get()
  async findAll() {
    return await this.socioService.findAll();
  }
  @Post()
  async create(@Body() socioDto: SocioDto) {
    const socio: SocioEntity = plainToInstance(SocioEntity, socioDto);
    return await this.socioService.create(socio);
  }

  @Put(':socioId')
  async update(@Param('socioId') socioId: string, @Body() socioDto: SocioDto) {
    const socio: SocioEntity = plainToInstance(SocioEntity, socioDto);
    return await this.socioService.update(socioId, socio);
  }
}
