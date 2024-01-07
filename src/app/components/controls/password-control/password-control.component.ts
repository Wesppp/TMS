import { Attribute, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PasswordModule } from 'primeng/password';

import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'app-password-control',
  standalone: true,
  imports: [
    PasswordModule,
    ReactiveFormsModule,
  ],
  templateUrl: './password-control.component.html'
})
export class PasswordControlComponent extends BaseControlComponent {
  constructor(@Attribute('placeholder') readonly placeholder: string) {
    super();
  }
}
