import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';

import { LyricsModule } from './v1/lyrics/lyrics.module';
import { EvalService } from './v1/eval/eval.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LyricsModule
  ],
  controllers: [],
  providers: [LyricsModule, EvalService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}

/*

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'test',
      entities: [],
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

*/