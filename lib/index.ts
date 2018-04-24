// ng
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { QuizzComponent } from './src/quizz.component';
// services
import { GameService } from './src/services/game.service';
import { RandomService } from './src/services/random.service';
// exports
export * from './src/quizz.component';
export * from './src/services/game.service';
export * from './src/services/random.service';

@NgModule({
  imports: [CommonModule],
  providers: [GameService, RandomService],
  declarations: [QuizzComponent],
  exports: [QuizzComponent]
})
export class QuizzModule {}
