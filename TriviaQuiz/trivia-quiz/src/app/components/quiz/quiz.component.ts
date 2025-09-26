import { Component } from '@angular/core';
import { GetQuizService } from '../../Services/get-quiz.service';
import { qmodel } from '../../Services/get-quiz.service';


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})


export class QuizComponent{

constructor(private getquizService : GetQuizService){}

questions: qmodel[] = [];

  ngOnInit(){
    this.questions = this.getquizService.questions
    console.log('from new comp' ,  this.questions)
    console.log('from new comp 2' , this.questions.length)
    let l = this.questions.length
    console.log('length' + ' ' + l)
  }

  


countindex = 0
correctanswers = 0
totalquestions = this.questions.length

next(){
  if (this.countindex < this.questions.length){
      this.countindex++
  }
}

previous(){
  if(this.countindex === this.questions.length || this.countindex>1){
    this.countindex--
  }
}




}
