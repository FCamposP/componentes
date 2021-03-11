import { Component, Input, OnInit } from '@angular/core';
import { CarGood } from 'src/app/models/models';

@Component({
  selector: 'app-cargood',
  templateUrl: './cargood.component.html',
  styleUrls: ['./../../../../assets/cargood/styles/styles.css']
})
export class CargoodComponent implements OnInit {
  titleCard:string;
  @Input() exeCard:CarGood;
  constructor() {
    this.exeCard= new CarGood("SiteVibes","./../../../../assets/cargood/images/imagejpeGJ6ZIbAAAAAB9k.jpg","Marketing","No reviews yet",
    "SiteVibes, a user generated content and visual marketing…","https://facebook.com");
   }

  ngOnInit(): void {
    this.titleCard="BigCommerce recommends";
  }

}
