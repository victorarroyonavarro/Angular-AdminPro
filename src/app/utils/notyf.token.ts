import { InjectionToken } from '@angular/core';
import { Notyf } from 'notyf';

export const NOTYF = new InjectionToken<Notyf>('NotyfToken');

export function notyfFactory(): Notyf {
  return new Notyf({
    duration: 2000,
    dismissible: true,
    ripple: true,
    position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'Warning',
        background: 'orange',
        dismissible: true,
      },
      {
        type: 'Success',
        background: 'rgb(61, 199, 99)',
        dismissible: true,
        icon: {
          className: 'done',
          tagName: 'i',
        },
      },
      {
        type: 'Error',
        background: 'indianred',
        dismissible: true,
        icon: {
          className: 'close',
          tagName: 'i',
        },
      },
    ],
  });
}

/* this.notyf.success('Correcto!!adasda qwe  qwe');
    this.notyf.error('Please fill out all the fields in the form');
    this.notyf.open({
      type: 'Warning',
      message: 'Send us <b>an email</b> to get support',

    });*/
