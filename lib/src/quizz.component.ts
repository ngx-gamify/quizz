import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html'
})
export class QuizzComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
