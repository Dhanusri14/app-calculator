import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-calculator';
  number1='';
  number2='';
  add:any='';
  subtract:any='';
  multiply:any='';
  divide:any='';
  modular:any='';
  

  Add(){
    this.add=Number(this.number1)+Number(this.number2);
  }
  Subtract(){
    this.subtract=Number(this.number1)-Number(this.number2);
  }
  Multiply(){
    this.multiply=Number(this.number1)*Number(this.number2);
  
  }
  Divide(){
    this.divide=Number(this.number1)/Number(this.number2);
  }
  Modular(){
    this.modular=Number(this.number1)%Number(this.number2);
  }
  Clear(){
    this.number1='';
    this.number2='';
    this.add='';
    this.subtract='';
    this.multiply='';
    this.divide='';
    this.modular='';
  }
}
