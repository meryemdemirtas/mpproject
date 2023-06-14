import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard';
import DataSource from 'devextreme/data/data_source';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 
  constructor( @Inject('apiUrl') private apiUrl: string,
  private http: HttpClient) {  }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}v1/Country`);
  }
  getDataSource() {
    return new DataSource({
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        key: 'Id',
        beforeSend(request) {
          const year = new Date().getFullYear() - 1;
          request.params.startDate = `${year}-05-10`;
          request.params.endDate = `${year}-5-15`;
        },
      },
    });
  }

  addCountry(country: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}v1/Country`,country);
  }
  updateCountry(code: any, country: any): Observable<any> {
    const url = `${this.apiUrl}v1/Country/${code}`;
    return this.http.put<any>(url, country);
  }
  
  deleteCountry(code: number): Observable<any> {
    const url = `${this.apiUrl}v1/Country/${code}`;
    return this.http.delete<any>(url);
  }

}
