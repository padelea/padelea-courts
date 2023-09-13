import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createCourtDto: CreateCourtDto) {
    try{
      const court = this.courtRepository.create(createCourtDto)
      await this.courtRepository.save(court)
      return court
   
    }
  catch(err){
    console.log(err)
  }
  }

  async findAll(paginationDto:PaginationDto) {
    
    const {limit = 10 , offset = 0} = paginationDto

    return await this.courtRepository.find({
      take: limit,
      skip: offset
    })
  }

  async findOne(term:string) {
    let court : Court
    const queryBuilder = this.courtRepository.createQueryBuilder()
    court = await queryBuilder
      .where('slug=:slug', {slug:term})
      .getOne()
      
    if (!court){
      throw new NotFoundException("The court doesn't exist in our DB")
    }
    return court
  
  }

  async update(id: number, updateCourtDto: UpdateCourtDto) {
    const court = await this.courtRepository.preload({
      id: id,
      ...updateCourtDto
    })
    if (!court) throw new NotFoundException("Court doesn't exist")

    try {
    await this.courtRepository.save(court)
    return court
    } catch(err){
      console.log(err)
    }
    
  
  
  }

  async remove(term:string) {
    const court = await this.findOne(term)
    await this.courtRepository.remove(court)
  }
}
