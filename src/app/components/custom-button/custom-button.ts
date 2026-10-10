import { Component, input } from '@angular/core';
import { ButtonType } from '../../type/buttonType';

@Component({
  selector: 'app-custom-button',
  standalone: false,
  styleUrl: './custom-button.css',
  templateUrl: './custom-button.html',
})
export class CustomButton {
  buttonType = input.required<ButtonType>();
}
