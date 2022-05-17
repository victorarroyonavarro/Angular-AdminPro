import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit,OnDestroy {
  public intervalSub: Subscription;
  constructor() {
    /*   this.retornaObservable().pipe(retry()).subscribe(
      (valor) => console.log(valor),
      (error) => console.warn('Error', error),
      () => console.info('termino el Obs')
    );*/

    this.intervalSub = this.retornaIntervalo().subscribe((valor) =>
      console.log(valor)
    );
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      //take(10),
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 5) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('conteo llego a 2');
        }
      }, 1000);
    });
  }

  ngOnInit(): void {}


  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }
}
