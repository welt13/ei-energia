import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParentsService {
  private baseUrl: string = 'http://localhost:8080/parents';
  private parents: Parent[] = [];

  constructor(private http: HttpClient) {}

  getParents(): Observable<Parent[]> {
    return this.http.get<any>(this.baseUrl);
  }

  postParent(name: string): Observable<Parent[]> {
    return this.http.post<any>(this.baseUrl, { name });
  }

  //   getParents() {
  //     return this.http.get(
  //       'https://run.mocky.io/v3/a9f88db2-b445-4e6c-9ff6-3ea228b9ddd7'
  //     );
  //   }

  //   postParent(name: string) {
  //     return this.http.post(
  //       'https://run.mocky.io/v3/f4d36830-675f-4f6d-8dd0-a890b116ee0f',
  //       { name }
  //     );
  //   }
}

export interface Parent {
  id: number;
  name: string;
}
