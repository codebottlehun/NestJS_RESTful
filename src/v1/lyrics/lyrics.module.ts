import { Module } from '@nestjs/common';
import { LyricsService } from './lyrics.service';
import { LyricsController } from './lyrics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LyricsEntity } from './lyrics.entity';


@Module({
  imports: [TypeOrmModule.forFeature([LyricsEntity])],
  providers: [LyricsService],
  controllers: [LyricsController],
  exports:[]
})
export class LyricsModule {}
