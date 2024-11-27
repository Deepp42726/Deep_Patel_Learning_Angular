import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[HighlightOnFocus]',
  standalone: true,
})
export class HighlightOnFocusDirective {

  @Input() HighlightOnFocus = '';

  constructor(private el: ElementRef, private renderer:Renderer2) {

  }

  @HostListener('focus') onFocus(): void
  {
    this.renderer.setStyle( this.el.nativeElement, 'backgroundColor', this.HighlightOnFocus || 'grey');
  }
}
