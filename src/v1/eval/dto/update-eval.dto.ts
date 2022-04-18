import { IsNotEmpty } from 'class-validator';

export class UpdateEvalDto {
  @IsNotEmpty()
  readonly id: number;
  
  readonly evaluatedCount: number;
  readonly availableLyricsCount: number;
}