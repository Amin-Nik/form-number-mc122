import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { InputLabel } from './components/input-label/input-label';
import { CustomButton } from './components/custom-button/custom-button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarPopupComponent, CyrusCalendarDirective } from 'ng-cyrus-calendar';
import { CustomCheckbox } from './components/custom-checkbox/custom-checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { Modal } from './components/modal/modal';
@NgModule({
  declarations: [App, Header, InputLabel, CustomButton, CustomCheckbox, Modal],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
    CalendarPopupComponent,
    CyrusCalendarDirective,
    MatStepperModule,
  ],
  exports: [NgxMaskDirective, NgxMaskPipe],

  providers: [provideBrowserGlobalErrorListeners(), provideEnvironmentNgxMask()],
  bootstrap: [App],
})
export class AppModule {}
