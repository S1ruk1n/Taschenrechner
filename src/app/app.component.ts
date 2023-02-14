import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    if (key === '/' || key === 'x' || key === '-' || key === '+' || key === '%') {
       const lastKey = this.mainText[this.mainText.length - 1];
       if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+' || lastKey === '%')  {
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
  } else {
    this.subText = 'ERROR: Ungültige eingabe';
  }
  this.Antwort = true;
}

// Ausgabe zum Löschen 
allClear(key: string) {
 if (key === 'AC') {
  this.mainText = "";
  this.subText = "";
  this.taschenrechnerAusgabe = "";
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