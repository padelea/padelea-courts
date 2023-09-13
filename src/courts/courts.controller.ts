import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CreateCourtDto } from './dto/create-court.dto';
import { UpdateCourtDto } from './dto/update-court.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('courts')
export class CourtsController {
  constructor(private readonly courtsService: CourtsService) {}

  @Post()
  create(@Body() createCourtDto: CreateCourtDto) {
    return this.courtsService.create(createCourtDto);
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto ) {
    return this.courtsService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.courtsService.findOne(term);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateCourtDto: UpdateCourtDto
  ) {
    return this.courtsService.update(+id, updateCourtDto);
  }

  @Delete(':slug')
  remove(@Param('slug') id: string) {
    return this.courtsService.remove(id);
  }
}
