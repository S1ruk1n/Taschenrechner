import { Component, ViewEncapsulation } from '@angular/core';
import { retry } from 'rxjs';
import Keyboard from "simple-keyboard";

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Tastatur
  value = "";
  keyboard!: Keyboard;

  // Taschenrechner
  title = 'Taschenrechner';
  subText = ''; 
  mainText = ''; 
  firstOperator1!: number; 
  secondOperator2!: number; 
  operator = ''; 
  taschenrechnerAusgabe = ''; 
  Antwort = false; 

  operatorSet = false; 



  // Funktion für das Klicken der Buttons

  
  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+' || key === '%' || key === 'AC' || key === 'x²') {
       const lastKey = this.mainText[this.mainText.length - 1];
       if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+' || lastKey === '%' || lastKey === 'AC' || lastKey === 'x²')  {
         this.operatorSet = true;
       }
       if ((this.operatorSet) || (this.mainText === '')) {
         return;
       }
       this.firstOperator1 = parseFloat(this.mainText);
       this.operator = key;
       this.operatorSet = true;
    }
    if (this.mainText.length === 10) {
      return;
    }
    this.mainText += key;
 }

 // Ausgabe der funktionen

 getAnswer() {
  this.taschenrechnerAusgabe = this.mainText;
  this. secondOperator2 = parseFloat(this.mainText.split(this.operator)[1]);
  if (this.operator === '/') {
    this.subText = this.mainText;
    this.mainText = (this.firstOperator1 / this.secondOperator2).toString();
    this.subText = this.taschenrechnerAusgabe;
    if (this.mainText.length > 9) {
      this.mainText = this.mainText.substring(0, 9);
    }
  } else if (this.operator === 'x') {
    this.subText = this.mainText;
    this.mainText = (this.firstOperator1 * this.secondOperator2).toString();
    this.subText = this.taschenrechnerAusgabe;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Error zu viele zahlen';
    }
  } else if (this.operator === '-') {
    this.subText = this.mainText;
    this.mainText = (this.firstOperator1 - this.secondOperator2).toString();
    this.subText = this.taschenrechnerAusgabe;
  } else if (this.operator === '+') {
    this.subText = this.mainText;
    this.mainText = (this.firstOperator1 + this.secondOperator2).toString();
    this.subText = this.taschenrechnerAusgabe;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Error zu viele zahlen';
    }
  } else if (this.operator === '%') {
    this.subText = this.mainText;
    this.mainText = (this.firstOperator1 * (this.secondOperator2 /100)).toString();
    this.subText = this.taschenrechnerAusgabe;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Error zu viele zahlen';
    }
  }else if (this.operator === 'x²') {
    this.subText = this.mainText;
    this.mainText = (this.firstOperator1 * this.firstOperator1).toString();
    this.subText = this.taschenrechnerAusgabe;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Error zu viele Zahlen';
  }
  } else {
    this.subText = 'ERROR: Ungültige eingabe';
  }
  this.Antwort = true;
}

//Ausgabe zum Löschen // Ausgabe objekt umschreiben
allClear(key: string) {
if(key === 'AC'){
  this.mainText = ''
  this.subText = ''
  return;
}
}

// löschen eine Eingabe
delete(key: string) {
  if(key === '!') {
    this.mainText = this.mainText.slice(0, -1);
    return;
  }
}

// Plus Miuns
negPosKey(key: string) {
  if(key === '+/-') {
    if (this.mainText > '0') {
      this.mainText = "-" + this.mainText;
      return;
    }
  }
  }
}