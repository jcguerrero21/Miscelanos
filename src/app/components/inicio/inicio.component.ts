import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>

    <app-clases></app-clases>

    <br>
    <br>

    <p [appResaltado]="'orange'">
      Hola Mundo
    </p>

    <br>
    <br>
    <app-ng-swith></app-ng-swith>
  `,
  styles: []
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
