import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://hmaapi.kilobytetech.com'; // API base URL
  constructor(private http: HttpClient) {}

  /**  for table data  */
  getData(pageNo: number, size: number,token:any): Observable<any> {
    const url = `${this.baseUrl}/users`;
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('size', size.toString());
    const headers = new HttpHeaders({
      Authorization:token,
    });
    return this.http.get(url, { headers, params });
  }

/**  for login  */
  login(email: any, password: any): Observable<any> {
    const url = `${this.baseUrl}/auth/login`;
    const payload = { email, password };
    return this.http.post(url, payload);
  }
}
