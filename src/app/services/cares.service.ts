import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CaresService {
  private baseUrl = 'http://localhost:8080/cares';

  constructor(private http: HttpClient) {}

  getCares(): Observable<Care[]> {
    return this.http.get<any>(this.baseUrl);
  }

  postCare(care: any): Observable<Care[]> {
    return this.http.post<any>(this.baseUrl, care);
  }

  //   getCares() {
  //     return this.http.get('https://run.mocky.io/v3/d96cbedf-3045-4877-b5ac-9605b7bf804b');
  //   }

  //   postCare(care : any) {
  //     return this.http.post('https://run.mocky.io/v3/4f55e674-88a5-4e78-842a-fc7ffa578b7d', care);
  //   }
}

export interface Care {
  duration: number;
  parentName: string;
  parentId: number;
  caretakerId: number;
  caretakerName: string;
  observations: string;
  startDate: string;
}
