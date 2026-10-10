import { Component, ElementRef, input, model, output, signal, ViewChild } from '@angular/core';
import { DatePickerType } from 'ng-cyrus-calendar';
import { InputType } from '../../type/inputType';

@Component({
  selector: 'app-input-label',
  standalone: false,
  styleUrl: './input-label.css',
  templateUrl: './input-label.html',
})
export class InputLabel {
  inputType = input.required<InputType>();

  DatePickerType = DatePickerType;
  selectedDate = model();

  timeValue = model();

  labelTitle = input.required<string>();
  inputIcon = input<string>();
  filledIcon = input<boolean>(true);

  dropdownValue = model();
  dropdownOptions = input<string[]>([]);

  checkBoxesValues = model<string[]>([]);

  textInputPlaceholder = input<string>('لطفا وارد نمایید');
  textInputValue = model<string>();

  guestList = model<string[]>([]);
  isAddGuestOpen = signal<boolean>(false);
  openModal() {
    this.isAddGuestOpen.set(true);
  }

  @ViewChild('theInput') theInput!: ElementRef<HTMLInputElement>;

  focusInput() {
    this.theInput.nativeElement.focus();
  }

  enterOutput = output();
  onEnter() {
    this.enterOutput.emit();
  }

  setTypeToNumber = input<boolean>(false);
}
