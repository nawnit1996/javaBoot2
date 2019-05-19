import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormDetail } from './new-page/FormDetail';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AddEditPageService {

  constructor(private http: HttpClient) {
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
   }



  /** GET Article list for edit/delte for admin */
  getArticlesForEdit(): Observable<FormDetail[]> {
    return this.http.get<FormDetail[]>("http://localhost:8080/admin/getArticleList/0", httpOptions);
  }

  saveArticle(article : FormDetail):Observable<Boolean>{
    
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');

    return this.http.post<Boolean>("http://localhost:8080/admin/saveArticle", article,httpOptions);
  }


  delteArticle(articleUrl : String):Observable<Boolean>{
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this.http.get<Boolean>("http://localhost:8080/admin/deleteArticle/"+articleUrl, httpOptions);
  }

  getArticleDetail(articleUrl : String):Observable<FormDetail>{
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this.http.get<FormDetail>("http://localhost:8080/admin/getArticleDetail/"+articleUrl, httpOptions);
  }
}
