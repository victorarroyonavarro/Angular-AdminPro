import { filter, map } from 'rxjs/operators';
import { ActivationEnd, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo!: string;
  public menu!: string;

  public tituloSubscribe: Subscription;
  constructor(private router: Router) {
    this.tituloSubscribe = this.getTitulos().subscribe((data) => {
      this.titulo = data.titulo;
      this.menu = data.menu;
      document.title = `AdminPro - ${this.titulo}`;
      /*
      // ----tabien se puede escribir asi
    .subscribe(({ titulo }) => {
      this.titulo = titulo;*/
    });
  }

  getTitulos() {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }

  ngOnDestroy(): void {
    console.log('unsubscribe')
      this.tituloSubscribe.unsubscribe();
  }
}
