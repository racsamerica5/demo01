import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
soles:number=0
tc:number=3.87
dolares:number=0
  constructor() { }

  ngOnInit(): void {
  }
convertir(){
  this.dolares=this.tc*this.soles
}
}
