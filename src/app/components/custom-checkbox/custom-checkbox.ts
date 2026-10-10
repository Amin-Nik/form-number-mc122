import { Component, model, signal } from '@angular/core';

const checkList = [
  {
    id: 1,
    iconName: 'schedule',
    text: 'پرزنت',
    selected: false,
  },
  {
    id: 2,
    iconName: 'factory',
    text: 'بازدید',
    selected: false,
  },
  {
    id: 3,
    iconName: 'local_cafe',
    text: 'پذیرایی',
    selected: false,
  },
  {
    id: 4,
    iconName: 'podium',
    text: 'اتاق کنفرانس',
    selected: false,
  },
  {
    id: 5,
    iconName: 'search_hands_free',
    text: 'تست درایو',
    selected: false,
  },
  {
    id: 6,
    iconName: 'transfer_within_a_station',
    text: 'ترنسفر',
    selected: false,
  },
  {
    id: 7,
    iconName: 'bakery_dining',
    text: 'میان وعده',
    selected: false,
  },
  {
    id: 8,
    iconName: 'egg_alt',
    text: 'صبحانه',
    selected: false,
  },
  {
    id: 9,
    iconName: 'fastfood',
    text: 'نهار',
    selected: false,
  },
];

@Component({
  selector: 'app-custom-checkbox',
  standalone: false,
  styleUrl: './custom-checkbox.css',
  templateUrl: './custom-checkbox.html',
})
export class CustomCheckbox {
  checkBox = signal(checkList);
  checkBoxesValues = model();
  onSelect(id: number) {
    this.checkBox?.update((checkList) => {
      return checkList.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      );
    });
    const selectedCheckBoxesTxt = this.checkBox()
      .filter((v) => v.selected === true)
      .map((ch) => ch.text);
    this.checkBoxesValues.update(() => selectedCheckBoxesTxt);
  }
}
