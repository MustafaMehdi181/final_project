import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pipe } from '@angular/core';
import { tap } from 'rxjs';


export interface qmodel{
  type: 'multiple' | 'boolean'; 
  difficulty: 'easy' | 'medium' | 'hard';
  category:string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}


@Injectable({
  providedIn: 'root'
})
export class GetQuizService {

  _questions: qmodel[] = [];

  get questions(): qmodel[] {
    return this._questions;
  }

  set questions(value: qmodel[]) {
    this._questions = value;
  }
  
  private apiUrl =
   'https://opentdb.com/api.php?'

  constructor(private http : HttpClient) { }

  getQuizurl(amount: number , category: number , difficulty: string , type: string):Observable<qmodel[]>
  {

    return this.http.get<qmodel[]>(this.apiUrl+'amount='+amount+'&category='+category+'&difficulty='+difficulty+'&type='+type)
  }
}
