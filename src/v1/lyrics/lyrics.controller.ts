import { Controller, Get } from '@nestjs/common';
import { LyricsService } from './lyrics.service';
import { LyricsEntity } from './lyrics.entity';
import { LyricRO } from './lyrics.interface';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@ApiBearerAuth()
@ApiTags('lyrics')
@Controller('lyrics')
export class LyricsController {
    constructor(private lyricsService: LyricsService) { }

    @Get()
    @ApiOperation({
        summary: '전체 가사 중 랜덤 가사 반환',
        deprecated: true
    })
    random(): Promise<LyricRO> {
        return this.lyricsService.getRandomLyrics()
    }

    @Get(':idx')
    @ApiOperation({
        summary: '아이디 값을 사용하여 하나의 가사를 반환'
    })
    findindex(@Param('idx') idx): Promise<LyricRO[]> {
        return this.lyricsService.findIndex(idx)
    }

}
