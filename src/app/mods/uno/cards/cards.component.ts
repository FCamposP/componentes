import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./../../../../assets/card/styles/styles.css']
})
export class CardsComponent implements OnInit {
@Input() dataCard:Card=new Card("",
"./../../../../assets/card/images/imagepngLVTVJE5ErkJggg.png",
"Zoom for Outlook","By Zoom Video Communications, Inc",
"Outlook","Add a Zoom meeting to any Outlook calendar event.",
"350","Additional purchase may be",
"https://appsource.microsoft.com/en-us/product/office/WA104381712?tab=Overview");
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
