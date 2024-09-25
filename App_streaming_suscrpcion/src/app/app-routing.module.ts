import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';

//const routes: Routes = [];

//rutas localhost:4200/ ...
export const routes: Routes = [{


  path: '',
  loadChildren: () => import("./modules/home/home.module").then((m) => m.HomeModule)
},
{
  path: 'auth',
  loadChildren: () => import("./modules/auth/auth.module").then((m) => m.AuthModule)
},
{
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
},
{
  path: '**',  //ruta no definida
  redirectTo: 'error/404'

},

]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
