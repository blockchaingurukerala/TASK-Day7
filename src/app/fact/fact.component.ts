import { Component } from '@angular/core';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent {
  no1=""
  f=1;
  f1=""
  calculateFact(){
    this.f=1;
    for(let i=1;i<=parseInt(this.no1);i++){
        this.f=this.f*i;
    }
    this.f1=this.f.toString()
    
  }
}
