import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective implements OnInit {

  @Input() userInfo: string = '';

  @HostBinding('style.background-color') backgroundColor: string = 'green';
  @HostBinding('style.font-size') fontSize: string = '18px';
  @HostBinding('innerHTML') innerHtml!: string;

  constructor() { }

  ngOnInit() {
    this.innerHtml = 'Hello' + ' ' + this.userInfo;
  }

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = 'orange';
    this.fontSize = '28px';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'green';
    this.fontSize = '18px';
  }

}
