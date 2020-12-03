import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SkinItem } from '../models/SkinItem';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SkinService {
  backendUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  Limit = '?_limit=5';

  constructor(private http:HttpClient) { }

  // Get 
  getSkins():Observable<SkinItem[]> {
    return this.http.get<SkinItem[]>(`${this.backendUrl}${this.Limit}`);
  }

  // Delete 
  deleteSkin(id):Observable<SkinItem> {
    const url = `${this.backendUrl}/${id}`;
    return this.http.delete<SkinItem>(url, httpOptions);
  }

  // Add 
  addSkin(skin:SkinItem):Observable<SkinItem> {
    return this.http.post<SkinItem>(this.backendUrl, skin, httpOptions);
  }

  // Toggle Completed
  toggleCompleted(skin: SkinItem):Observable<any> {
    const url = `${this.backendUrl}/${skin.id}`;
    return this.http.put(url, skin, httpOptions);
  }
}