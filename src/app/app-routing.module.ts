import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemsComponent } from './pages/items/items.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';


const app_routes: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'servicios', component: ServiciosComponent},
    { path: 'contacto', component: ContactoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
      RouterModule.forRoot( app_routes, { useHash: true } )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
