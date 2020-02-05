import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) {}

  checkHomepage(url: string) {
    if (
      url === '' ||
      url === '/'
    ) {
      return `/assets/home.json`;
    } else {
      return `/assets/${url}.json`;
    }
  }

  getPage(endpoint: string) {
    return this.http.get(this.checkHomepage(endpoint));
  }
}
