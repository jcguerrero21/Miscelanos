import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  private alerta:string = "alert-danger";
  private loading:boolean = false;

  private propiedades:Object = {
    danger: false
  }

  constructor() { }

  ejecutar() {
    this.loading = true;

    setTimeout( ()=> this.loading = false, 2000 )
  }

  ngOnInit() {
  }

}
