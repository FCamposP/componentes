import { Component, Input, OnInit } from '@angular/core';
import { Descuento } from 'src/app/models/models';

@Component({
  selector: 'app-descuento',
  templateUrl: './descuento.component.html',
  styleUrls: ['./../../../../assets/descuento/styles/styles.css']

})
export class DescuentoComponent implements OnInit {

@Input()descuento:Descuento;

  constructor() { 
    this.descuento= new Descuento("Inscríbete ahora","176.40","196",
    "4 cursos en 5 meses","Inscríbete en el programa",
    "Me gustaría recibir correos electrónicos de GalileoX e informarme sobre otras ofertas relacionadas con Marketing Digital.",
    "url");
  }

  ngOnInit(): void {
  }

}
