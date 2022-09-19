import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocioEntity } from './socio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocioEntity])],
})
export class SocioModule {}
