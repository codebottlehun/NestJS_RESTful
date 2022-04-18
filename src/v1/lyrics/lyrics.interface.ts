export interface LyricData {
    id: number;
    lyric: string;
    genre: string;
    evaluatedCount: number;
    availableLyricsCount: number;
}

export interface LyricRO {
    Lyric: LyricData;
  }