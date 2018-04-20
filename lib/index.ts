import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzComponent } from './src/quizz.component';

export * from './src/quizz.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuizzComponent],
  exports: [QuizzComponent]
})
export class QuizzModule {}
