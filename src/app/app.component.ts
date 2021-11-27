import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator-Ted-Wi';
  mainDisplayText = '';
  subDisplayText = ''
  operand1 =0 ; 
  operand2 =0 ; 
  operator = ''; 
  calculationString = '';
  answered = false;
  //  flag qui vérifie si on a répondu à une opération
  operatorSet = false; 

  pressKey(key: string) {
    if (this.answered = true){
      if(this.mainDisplayText==='NaN' || this.mainDisplayText==='Infinity'){
        this.mainDisplayText = '';
        this.subDisplayText = ''
        this.answered = false ;
        this.operatorSet = false ;
      }
      if(this.mainDisplayText!=='NaN' && this.mainDisplayText!=='Infinity'){
        this.answered = false ;
        this.operatorSet = false ;
      }
    }
    if (key === '/' || key === '×' || key === '-' || key === '+') {
      const lastKey = this.mainDisplayText[this.mainDisplayText.length - 1];
      if (lastKey === '/' || lastKey === '×' || lastKey === '-' || lastKey === '+') {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.mainDisplayText === '')) {
        return;
      }
      this.operand1 = parseFloat(this.mainDisplayText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainDisplayText.length === 25) {
      return;
    }
    this.mainDisplayText += key;
  }
  delete(){
    this.mainDisplayText = this.mainDisplayText.substr(0,this.mainDisplayText.length-1)
  }
  allClear() {
    this.mainDisplayText = '';
    this.subDisplayText = '';
    this.operatorSet = false;
  }
  getAnswer() {
    this.calculationString = this.mainDisplayText;
    this.operand2 = parseFloat(this.mainDisplayText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 / this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 25) {
        this.mainDisplayText = this.mainDisplayText.substr(0, 25);
      }
    } else if (this.operator === '×') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 * this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 25) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 - this.operand2).toString();
      this.subDisplayText = this.calculationString;
    } else if (this.operator === '+') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 + this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 25) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    } else {
      this.subDisplayText = 'ERROR: Invalid Operation';
    }
    this.answered = true;

  }
}
