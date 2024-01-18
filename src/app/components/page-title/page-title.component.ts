import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {
  @Input() public title: string = 'New Collection';
  @Input() public bgImageSrc: string = '/assets/images/home-header-bg.png';
  @Input() public isShowBtn: boolean = true;
}
