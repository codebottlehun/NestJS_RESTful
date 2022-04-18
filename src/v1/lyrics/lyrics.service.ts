import { Injectable } from '@nestjs/common';
import { Repository, Index } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LyricsEntity } from './lyrics.entity';
import { getRandomIndex } from '../../utils';
import { LyricRO } from './lyrics.interface';

@Injectable()
export class LyricsService {
    constructor(
        @InjectRepository(LyricsEntity)
        private LyricsRepository: Repository<LyricRO>
    ) {}

    async getRandomLyrics(): Promise<LyricRO> {
        let box: LyricRO[] = await this.LyricsRepository.find()
        return box[getRandomIndex(box.length)]
    }

    async findIndex(idx): Promise<LyricRO[]> {
        return await this.LyricsRepository.findByIds(idx)
    }
}
