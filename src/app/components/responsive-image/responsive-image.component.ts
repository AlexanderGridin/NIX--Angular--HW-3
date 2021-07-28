import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.css']
})
export class ResponsiveImageComponent implements OnInit {
  @Input() url!: string;
  @Input() alt!: string;
  @Input() width!: string;
  @Input() height!: string;

  public actualImageInlineStyle!: Object;

  constructor() { }

  ngOnInit(): void {
    this.actualImageInlineStyle = {
      'background-image': `url(${this.url})`,
      'width': `${this.width}`,
      'height': `${this.height}`
    };
  }

}
