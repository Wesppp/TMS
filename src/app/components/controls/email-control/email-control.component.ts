import { Attribute, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'app-email-control',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule],
  templateUrl: './email-control.component.html'
})
export class EmailControlComponent extends BaseControlComponent {
  constructor(@Attribute('placeholder') readonly placeholder: string) {
    super();
  }
}
