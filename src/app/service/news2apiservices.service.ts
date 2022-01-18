import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class News2apiservicesService {

  constructor(private _http: HttpClient) { }

  //NEWS2_API_URL
  private NEWS2_API_URL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=769882afc79249259daee8dfa3d9e291"

  //topHeading()
  topHeading(): Observable<any>{
    return this._http.get(this.NEWS2_API_URL);
  }


}
