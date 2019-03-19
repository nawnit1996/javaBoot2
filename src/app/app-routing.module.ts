import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './articles/articles.component';
import { PagesComponent } from "./pages/pages.component";


const routes: Routes = [
{ path : '' , redirectTo : 'articles' , pathMatch :'full'},
{ path : 'articles' , component:ArticlesComponent},
{ path : 'article/:articleName' , component : PagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
