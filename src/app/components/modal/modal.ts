import { Component, model, signal } from '@angular/core';
import { buttonType } from '../../type/buttonType';
import { inputType } from '../../type/inputType';

@Component({
  selector: 'app-modal',
  standalone: false,
  styleUrl: './modal.css',
  templateUrl: './modal.html',
})
export class Modal {
  readonly buttonType = buttonType;
  readonly inputType = inputType;

  inputValue = signal<string>('');
  guestList = model<string[]>([]);
  addGuest() {
    if (this.inputValue() !== '') {
      this.guestList.update((currentList) => {
        return [...currentList, this.inputValue().trim()];
      });
      this.inputValue.set('');
    }
  }
  removeGuest(guestId: number) {
    this.guestList.update((currentList) => {
      return currentList.filter((v, i) => i != guestId);
    });
  }

  isActive = model<boolean>(false);
  closeModal() {
    this.isActive.set(false);
    this.inputValue.set('');
  }
}
