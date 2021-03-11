import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { CarcoolComponent } from './carcool/carcool.component';
import { CardsComponent } from './cards/cards.component';
import { CargoodComponent } from './cargood/cargood.component';
import { DescuentoComponent } from './descuento/descuento.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Motivador1Component } from './motivador1/motivador1.component';
import { Motivador2Component } from './motivador2/motivador2.component';
import { ShopifyComponent } from './shopify/shopify.component';
import { UnidoComponent } from './unido/unido.component';
import { VacioComponent } from './vacio/vacio.component';

 const unoRoutes:Routes=[
 {path:'uno',component:VacioComponent,children:[
   {path:'coms',component:UnidoComponent},
    {path:'cards',component:CardsComponent},
    {path:'cargood',component:CargoodComponent},
    {path:'shopy',component:ShopifyComponent},
    {path:'carcool',component:CarcoolComponent},
    {path:'descuento',component:DescuentoComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'motivador1',component:Motivador1Component},
    {path:'motivador2',component:Motivador2Component},
 ]}

];

@NgModule({
    imports: [RouterModule.forChild(unoRoutes)],
    exports: [RouterModule]
  })

export class ModUnoRoutes{}
