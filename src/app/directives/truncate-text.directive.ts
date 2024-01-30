import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTruncateText]',
  standalone: true
})
export class TruncateTextDirective implements OnInit {
  @Input() public appTruncateText: number = 100;

  private originalText!: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  public ngOnInit(): void {
    this.originalText = this.el.nativeElement.innerText;

    this.truncateText();
  }

  private truncateText(): void {
    const elText: string = this.el.nativeElement.innerText;

    if (elText.length > this.appTruncateText) {
      const truncatedText: string = elText.substring(0, this.appTruncateText) + '...';
      const seeAllLink = this.renderer.createElement('a');

      this.renderer.setProperty(this.el.nativeElement, 'innerText', truncatedText);
      this.renderer.setProperty(seeAllLink, 'innerText', 'See Full Text');
      this.renderer.listen(seeAllLink, 'click', () => this.showFullText());

      this.renderer.appendChild(this.el.nativeElement, seeAllLink);
    }
  }

  private showFullText(): void {
    this.renderer.setProperty(this.el.nativeElement, 'innerText', this.originalText);
  }
}
