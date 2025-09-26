import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { GetQuizService } from '../../Services/get-quiz.service';
import { qmodel } from '../../Services/get-quiz.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz-setup',
  standalone: true,
  imports: [FormsModule , RouterModule],
  templateUrl: './quiz-setup.component.html',
  styleUrl: './quiz-setup.component.scss'
})

export class QuizSetupComponent
{

  constructor(private getquizservice : GetQuizService , private router: Router){}

  questions : qmodel[] = []
  public triviaAmount! : number;
  public triviaCategory!: number;
  public triviaDifficulty! : string
  public triviaType!: string
   

  async loadquiz(){
    try{
      const result = await firstValueFrom(this.getquizservice.getQuizurl(this.triviaAmount,this.triviaCategory,this.triviaDifficulty,this.triviaType))
      //console.log('API REUSLT' , result)
      this.getquizservice.questions = result ?? []
      console.log('Questions after assignment:', this.getquizservice.questions);

    }catch (err){
      console.error('Failed to Load Questions: ', err)
    }
    }

  async Submit(): Promise<void> {
  await this.loadquiz(); 
  //console.log('help', this.getquizservice.questions);
  this.router.navigate(['/quiz']);
  }

}
