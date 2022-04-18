import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GENRE, SCORE } from '../../utils';

// Typeorm entities option reperence -> https://typeorm.io/#/entities

@Entity("lyric_generated_lyrics")
export class LyricsEntity {

    @PrimaryColumn("int")
    id: number

    @Column("text")
    lyric: string

    @Column({type: "enum", enum: GENRE})
    genre: GENRE

    @Column({type: "enum", enum: SCORE})
    score: SCORE

    @Column("date")
    createAt: Date

    @Column("date")
    updateAt: Date

    @Column("int")
    evaluatedCount: number

    @Column("int")
    availableLyricsCount: number

}
