import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @Input() amount!: number;
  @Input() currency!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
