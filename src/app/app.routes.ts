import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./loginpage/loginpage.component').then(m => m.LoginpageComponent) },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }