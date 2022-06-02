import { InjectionToken } from '@angular/core';
import { Notyf } from 'notyf';

export const NOTYF = new InjectionToken<Notyf>('NotyfToken');

export function notyfFactory(): Notyf {
  return new Notyf({

    duration: 2000,
    dismissible: true,
     position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'Warning',
        background: 'orange',
        //duration: 5000,
        dismissible: true,


      },
      {
        type: 'Info',
        background: 'blue',
        //duration: 5000,
        dismissible: true,

        icon: {
          className: 'warning',
          tagName: 'i',

        }
      },
     {
        type: 'Success',
        background: 'rgb(61, 199, 99)',
        //duration: 5000,
        dismissible: true,
        icon: {
          className: 'done',
          tagName: 'i',

        }
      },
      {
        type: 'Error',
        background: 'indianred',
        //duration: 5000,
        dismissible: true,
        icon: {
          className: 'close',
          tagName: 'i',

        }
      }
    ]

  });
}


