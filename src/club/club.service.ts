import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClubEntity } from './club.entity';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(ClubEntity)
    private readonly clubRepository: Repository<ClubEntity>,
  ) {}

  // Encuentra todos los socios de un club
  async findAll(): Promise<ClubEntity[]> {
    return await this.clubRepository.find({ relations: ['socios'] });
  }

  async create(club: ClubEntity): Promise<ClubEntity> {
    return await this.clubRepository.save(club);
  }

  async update(id: string, clubP: ClubEntity): Promise<ClubEntity> {
    const persistedClub: ClubEntity = await this.clubRepository.findOne({
      where: { id },
    });
    return await this.clubRepository.save({ ...persistedClub, ...clubP });
  }
}

