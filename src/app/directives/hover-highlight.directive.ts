import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  @Input() appHoverHighlight = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.appHoverHighlight || 'grey');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('');
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
