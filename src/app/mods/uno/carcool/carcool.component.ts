import { Component, Input, OnInit } from '@angular/core';
import { CardCool } from 'src/app/models/models';

@Component({
  selector: 'app-carcool',
  templateUrl: './carcool.component.html',
  styleUrls: ['./../../../../assets/cardcool/styles/styles.css']
})
export class CarcoolComponent implements OnInit {

  @Input() exeCard:CardCool;

  constructor() {

    this.exeCard= new CardCool("PayHelm Accounting & Reporting","Accounting & Tax",
    "www.category.com","www.review.com","www.detail.com","www.proveedor.com",
    "../../../../assets/img/carcool/imagesvgZGRkZGwvc3ZnPgo.svg",
    "Getpowerful analytics, generate sophisticated reports, gain insights into your customer groups, profit loss accounting by SKU, plus more.");

   }

  ngOnInit(): void {
  }

}
