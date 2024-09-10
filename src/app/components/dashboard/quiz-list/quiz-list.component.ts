import { Component } from '@angular/core';
import { IQuiz } from '../../../models/quiz.model';
import { LayoutImports } from '../../shared/imports/layouts.import';
import { CardModule, NavbarComponent } from '@coreui/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'mapache-quizer-list',
  standalone: true,
  imports: [...LayoutImports, CardModule, DatePipe, NavbarComponent],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss',
})
export class QuizListComponent {
  quizList: IQuiz[] = [
    {
      id: 'abcde',
      name: 'Example Quiz',
      description: 'To make a happy path',
      created: new Date(),
    },
    {
      id: 'bcdef',
      name: 'Example Quiz 2',
      description: 'To make a happy path 2',
      created: new Date(),
    },
    {
      id: 'bcdef',
      name: 'Example Quiz 2',
      description: 'To make a happy path 2',
      created: new Date(),
    },
  ];
}
