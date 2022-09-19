import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubEntity } from './club/club.entity';
import { ClubModule } from './club/club.module';
import { SocioEntity } from './socio/socio.entity';
import { SocioModule } from './socio/socio.module';

@Module({
  imports: [
    ClubModule,
    SocioModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0110',
      database: 'club',
      entities: [ClubEntity, SocioEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
