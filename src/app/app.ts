import { Component, computed, signal } from '@angular/core';
import { buttonType } from './type/buttonType';
import { inputType } from './type/inputType';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  location = {
    title: 'ساختمان مرکزی ماموت',
    address: 'تهران - خیابان وزرا - خیابان هفتم - پلاک 12',
  };

  readonly buttonType = buttonType;
  readonly inputType = inputType;

  isPreview = signal<boolean>(false);

  isStepOneCompleted = computed(() => {
    if (this.dateValue()?.trim() && this.timeValue()?.trim() && this.locationValue()?.trim()) {
      return true;
    } else return false;
  });
  isStepTwoCompleted = computed(() => {
    if (this.guestLevel()?.trim()) {
      return true;
    } else return false;
  });
  isStepThreeCompleted = computed(() => {
    if (
      this.guestLevel()?.trim() &&
      this.checkBoxesValues()?.length !== 0 &&
      this.explanation()?.trim()
    ) {
      return true;
    } else return false;
  });
  isStepFourCompleted = computed(() => {
    if (this.guestList()?.length !== 0 && this.hostName()?.trim() && this.guestNumbers()?.trim()) {
      return true;
    } else return false;
  });

  selectedDate = signal(undefined);
  changeDate(selectedDate: any) {
    if (!selectedDate) {
      return;
    }
    const formatter = new Intl.DateTimeFormat('en-US-u-ca-persian', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const date = new Date(selectedDate);
    const dayOfTheWeek = new Intl.DateTimeFormat('fa-IR', {
      weekday: 'long',
    }).format(date);

    const parts = formatter.formatToParts(new Date(selectedDate));
    const year = parts.find((p) => p.type === 'year')?.value;
    const month = parts.find((p) => p.type === 'month')?.value;
    const day = parts.find((p) => p.type === 'day')?.value;
    return `${year}/${month}/${day} ${dayOfTheWeek}`;
  }

  dateValue = computed(() => this.changeDate(this.selectedDate()));
  timeValue = signal('');
  locationValue = signal('');
  guestLevel = signal('');
  explanation = signal('');
  guestList = signal<string[]>([]);
  hostName = signal('');
  guestNumbers = signal('');
  checkBoxesValues = signal<string[]>([]);
  checkBoxesValue = computed(() => this.checkBoxesValues().join(' - '));

  isErrorDisplay = signal(false);
  setError(step: number) {
    if (
      (step === 1 && !this.isStepOneCompleted()) ||
      (step === 2 && !this.isStepTwoCompleted()) ||
      (step === 3 && !this.isStepThreeCompleted()) ||
      (step === 4 && !this.isStepFourCompleted())
    ) {
      this.isErrorDisplay.set(true);
    } else this.isErrorDisplay.set(false);
  }

  preview(step: number) {
    if (this.isStepFourCompleted()) this.isPreview.set(true);
    this.setError(step);
  }
  nextStep(stepper: MatStepper, step: number) {
    stepper.next();
    this.setError(step);
  }
  preStep(stepper: MatStepper) {
    stepper.previous();
  }
  previewFormPreStep() {
    this.isPreview.set(false);
  }
  onSubmit() {
    console.log([
      this.dateValue(),
      this.timeValue(),
      this.locationValue(),
      this.guestLevel(),
      this.checkBoxesValues(),
      this.explanation(),
      this.guestList(),
      this.hostName(),
      this.guestNumbers(),
    ]);
  }
}
