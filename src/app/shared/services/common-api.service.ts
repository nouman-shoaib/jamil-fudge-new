import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonApiService {
  constructor(private http: HttpClient) {}
  getNews() {
    let url = `${environment.baseUrl}/users/1/posts`;
    return this.http.get(url);
  }
  getComments() {
    let url = `${environment.baseUrl}/posts/1/comments`;
    return this.http.get(url);
  }
  getUsers() {
    let url = `${environment.baseUrl}/users`;
    return this.http.get(url);
  }
}
