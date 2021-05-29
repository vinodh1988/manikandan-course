import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }

  getDetails(id:number):Observable<object>{
    
    return this.http.get("http://localhost:4000/details/"+id);
  }
}
