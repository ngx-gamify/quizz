// ng
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
// npm
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { withLatestFrom, tap, pluck } from 'rxjs/operators';
// models
import {
  IQuizzConfig,
  IQuizz,
  INextQuestionInfos,
  ILangItem
} from './models/quizz.model';
import { GameService } from './services/game.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html'
})
export class QuizzComponent implements OnInit, OnChanges {
  @Input() data: IQuizz;
  @Input() bootstrap: boolean;
  configSubject$ = new BehaviorSubject<IQuizzConfig>({
    speed: 1000,
    language: 'fr',
    itemsNbr: 4
  });
  quizzSubject$: Subject<IQuizz> = new Subject();
  name$: Observable<string>;
  constructor(private _gameService: GameService) {}

  ngOnInit(): void {
    // watch quizz
    this.quizzSubject$.pipe(
      withLatestFrom(this.configSubject$, (quizz: IQuizz, config) => {
        this._gameService.leftItemsSubject$.next(quizz.items);
        return {
          leftItems: quizz.items,
          allItems: quizz.items,
          config
        } as INextQuestionInfos;
      }),
      tap(this._gameService.nextQuestion)
    );

    // watch quizz name
    this.name$ = this.quizzSubject$.pipe(
      pluck('name'),
      withLatestFrom(
        this.configSubject$,
        (name: ILangItem, config: IQuizzConfig) => name[config.language]
      )
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('quizz.component::ngOnChanges', changes);
    this.quizzSubject$.next(changes.data.currentValue);
  }
}
