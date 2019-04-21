import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { PagesComponent ,SafeHtmlPipe} from './pages/pages.component';
import { NewPageComponent } from './new-page/new-page.component';
import { GistModule } from '@sgbj/angular-gist';
import { GistComponent } from './gist/gist.component';
import {DynamicHTMLModule}  from 'ng-dynamic';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PagesComponent,
    SafeHtmlPipe,
    NewPageComponent,
    GistComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GistModule,
    HttpClientModule,
    DynamicHTMLModule.forRoot({
      components: [
        { component: GistComponent, selector: 'gist' },
      ]
    }),
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
