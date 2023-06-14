import { HttpClient } from '@angular/common/http';
import {  Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ApiResponse, Employee,  } from './employees.interface';
import DataSource from 'devextreme/data/data_source';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  static getDataSource() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) { }


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
  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}v1/Employee`);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}v1/Employee/${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }
  public addEmployee(employ: Employee): Observable<Employee> {
    const url = `${this.apiUrl}v1/Employee`;
    return this.http.post<Employee>(url, employ);
  }


  deleteEmployee(id: number): Observable<any> {
    const url = `${this.apiUrl}v1/Employee/${id}`;
    return this.http.delete<any>(url);
  }
}