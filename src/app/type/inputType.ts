export type InputType = 'date' | 'time' | 'select' | 'checkbox' | 'text' | 'modal';

export const inputType = {
  date: 'date',
  time: 'time',
  select: 'select',
  checkbox: 'checkbox',
  text: 'text',
  modal: 'modal',
} as const;
