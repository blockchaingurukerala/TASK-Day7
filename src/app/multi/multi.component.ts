import { Component } from '@angular/core';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent {
  no1="";
  no2="";
  r=0
 multiply(){
   this.r=parseInt(this.no1)*parseInt(this.no2);
   
 }
}
