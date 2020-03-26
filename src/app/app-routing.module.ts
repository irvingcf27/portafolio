import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [//especificar rutas
 
  {path:'home',component: PortafolioComponent},//rutas es un arreglo
  {path:'about',component: AboutComponent},
  {path:'item/:id',component: ItemComponent},
  {path:'search/:termino',component: SearchComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}//redireccionar

];

@NgModule({//decorador
  imports: [RouterModule.forRoot(routes, {useHash:true})],//forRoot rutas de la raiz
  exports: [RouterModule]//app.component.html
})
export class AppRoutingModule { }
