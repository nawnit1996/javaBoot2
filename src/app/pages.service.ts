import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormDetail } from './new-page/FormDetail';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor( private http: HttpClient) { 

  }

  getArticle(articleUrl : String) : Observable<FormDetail>{
    
 return  null;
  }
}
