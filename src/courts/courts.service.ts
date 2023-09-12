import { Injectable } from '@nestjs/common';
import { CreateCourtDto } from './dto/create-court.dto';
import { UpdateCourtDto } from './dto/update-court.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Court } from './entities/court.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class CourtsService {

  constructor(
    @InjectRepository(Court) private readonly courtRepository:Repository<Court>
  ){}

  create(createCourtDto: CreateCourtDto) {
    return 'This action adds a new court';
  }

  async findAll(paginationDto:PaginationDto) {
    
    const {limit = 10 , offset = 0} = paginationDto

    return await this.courtRepository.find({
      take: limit,
      skip: offset
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} court`;
  }

  update(id: number, updateCourtDto: UpdateCourtDto) {
    return `This action updates a #${id} court`;
  }

  remove(id: number) {
    return `This action removes a #${id} court`;
  }
}
