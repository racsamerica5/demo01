import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {
num1:number=0
num2:number=0
resultado:number=0
  constructor() { }

  ngOnInit(): void {
  }
  sumar(){
    this.resultado=this.num1+this.num2
  }
}
