import { Routes } from '@angular/router';
import { QuizSetupComponent } from './components/quiz-setup/quiz-setup.component';
import { QuizComponent } from './components/quiz/quiz.component';

export const routes: Routes =
[
    {
        path: '' , 
        component: QuizSetupComponent
    },

    {
        path: 'quiz' , 
        component: QuizComponent
    }

];
