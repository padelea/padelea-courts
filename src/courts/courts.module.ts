import { Module } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CourtsController } from './courts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Court } from './entities/court.entity';

@Module({
  controllers: [CourtsController],
  providers: [CourtsService],
  imports:[
    TypeOrmModule.forFeature([Court])
  ]
})
export class CourtsModule {}
