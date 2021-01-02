import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{
  public fNum: number;
  public sNum: number;
  public rNum: number;

  constructor() { }
  add(): void {
    this.rNum = this.fNum + this.sNum;
  }

  sub(): void {
    this.rNum = this.fNum - this.sNum;
  }

  multi(): void {
    this.rNum = this.fNum * this.sNum;
  }

  div(): void {
    this.rNum = this.fNum / this.sNum;
  }

}
