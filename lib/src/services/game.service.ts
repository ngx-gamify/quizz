// ng
import { Injectable } from '@angular/core';
// npm
import { Subject } from 'rxjs/Subject';
// models
import { INextQuestionInfos } from '../models/quizz.model';
// services
import { RandomService } from './random.service';

@Injectable()
export class GameService {
  itemSubject$ = new Subject();
  answersSubject$ = new Subject();
  leftItemsSubject$ = new Subject();
  playerScoreSubject$ = new Subject();
  constructor(private _randomService: RandomService) {}
  nextQuestion({ leftItems, allItems, config }: INextQuestionInfos) {
    // append only if still question left, else, end of current quizz
    if (leftItems.length) {
      // select a random right answer
      const rightAnswer = this._randomService.getRandomInArray(leftItems);

      // exclude right answer from possible wrong answers & get n wrong answer
      allItems = [...allItems.filter(item => item !== rightAnswer)];
      const wrongAnswers = this._randomService.getRandomsInArray(
        allItems,
        config.itemsNbr - 1
      );

      // stream those new values
      this.itemSubject$.next(rightAnswer);
      this.answersSubject$.next(wrongAnswers.concat(rightAnswer));

      // stream item lefts for next questions (prevent re-pick same question)
      leftItems = [...leftItems.filter(item => item !== rightAnswer)];
      this.leftItemsSubject$.next(leftItems);
    } else {
      console.log('end game !');
    }
  }
}
