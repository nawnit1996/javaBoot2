import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './articles/articles.component';
import { PagesComponent } from "./pages/pages.component";
import { NewPageComponent } from "./new-page/new-page.component"
import {  AdminPageComponent} from "./admin-page/admin-page.component";
const routes: Routes = [
{ path : '' , redirectTo : 'articles' , pathMatch :'full'},
{ path : 'articles' , component:ArticlesComponent},
{ path : 'article/:articleName' , component : PagesComponent},
{ path : 'admin/add-edit-page',component : NewPageComponent},
{path : 'adminPanel', component: AdminPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
