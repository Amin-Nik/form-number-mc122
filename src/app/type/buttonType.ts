export type ButtonType =
  | {
      class: 'next';
      title: 'مرحله بعد';
    }
  | {
      class: 'previous';
      title: 'مرحله قبل';
    }
  | {
      class: 'preview';
      title: 'پیش نمایش';
    }
  | {
      class: 'submit';
      title: 'ثبت نهایی';
    }
  | {
      class: 'add';
      title: 'افزودن';
    }
  | {
      class: 'cancel';
      title: 'بستن';
    };

export const buttonType = {
  next: {
    class: 'next',
    title: 'مرحله بعد',
  },
  previous: {
    class: 'previous',
    title: 'مرحله قبل',
  },
  preview: {
    class: 'preview',
    title: 'پیش نمایش',
  },
  submit: {
    class: 'submit',
    title: 'ثبت نهایی',
  },
  add: {
    class: 'add',
    title: 'افزودن',
  },
  cancel: {
    class: 'cancel',
    title: 'بستن',
  },
} as const;
