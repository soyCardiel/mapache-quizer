import { Component } from '@angular/core';
import { IQuiz } from '../../../models/quiz.model';

@Component({
  selector: 'mapache-quizer-list',
  standalone: true,
  imports: [],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss',
})
export class QuizListComponent {
  quizList: IQuiz[] = [
    {
      id: 'abcde',
      name: 'Example Quiz',
      description: 'To make a happy path',
    },
    {
      id: 'bcdef',
      name: 'Example Quiz 2',
      description: 'To make a happy path 2',
    },
    {
      id: 'bcdef',
      name: 'Example Quiz 2',
      description: 'To make a happy path 2',
    },
  ];
}
