import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { CargoodComponent } from './cargood/cargood.component';
import { CarcoolComponent } from './carcool/carcool.component';
import { VacioComponent } from './vacio/vacio.component';
import { UnidoComponent } from './unido/unido.component';
import { ModUnoRoutes } from './uno.routes';
import { ShopifyComponent } from './shopify/shopify.component';
import { DescuentoComponent } from './descuento/descuento.component';
import { FeedbackComponent } from './feedback/feedback.component';



@NgModule({
  declarations: [
    CardsComponent,
    CargoodComponent,
    CarcoolComponent,
    VacioComponent,
    UnidoComponent,
    ShopifyComponent,
    DescuentoComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    ModUnoRoutes
  ],
  bootstrap: [VacioComponent]
})
export class ModunoModule { }
