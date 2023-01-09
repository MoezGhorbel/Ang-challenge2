import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  public value!: number;
  public result!: number;

  ngOnInit(): void {
  }

  calculateCircle(value:any) {
    this.result = Math.PI * value * value;
    this.value  = value;
  }

  calculateSquare(value:any) {
    this.result = value * value;
    this.value  = value;
  }
}
