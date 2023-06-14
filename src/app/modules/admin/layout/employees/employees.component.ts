import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from './employees.service';
import { ApiResponse, Employee } from './employees.interface';
import DataSource from 'devextreme/data/data_source';
import { MatDialog } from '@angular/material/dialog';
import { DxDataGridComponent } from 'devextreme-angular';
import { DashboardService } from '../dashboard/dashboard.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  [x: string]: any;
  @ViewChild(DxDataGridComponent, { static: false }) grid!: DxDataGridComponent;
  isPopupVisible!: boolean;
  expanded: Boolean = true;
  isEditVisible!: boolean;
  scrollingMode = 'standard';
  isPopupOpen = false;
  PopupEror= false;
  PopupInformation = false;
  dataSource!: DataSource;
  showPopup = false;
  events: Array<string> = [];
  response: any;
 viewportTop:boolean=false
 selectedCountryCode: string = '';
  employee!: Employee[] ;
  newEmployee: Employee = {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    firstName: '',
    lastName: '',
    title: '',
    position: '',
    birthDate: '',
    hireDate: '',
    notes: '',
    address: '',
    countryCode: ''
  }
  editMode?: boolean;

  constructor(private apiService: EmployeesService, private dashboardiService: DashboardService,_dialog:MatDialog) {
 
   }

  ngOnInit(): void {
    this.getData();
    this.loadCountries();
  }
 
  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
}
customizeQuillModules() {

}


selectedRowIndex = -1;
selectedChanged(e:any) {
  this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
}





getData(): void {
  this.apiService.getEmployee()
    .subscribe((response: any) => {
      this.employee = response.data;
      this.dataSource = new DataSource({
        store: {
          type: 'array',
          data: this.employee || [],
          key: 'id'
        }
      });
      console.log(this.employee);
    });
}
 
selectEmployee(selectedEmployee: Employee): void {
  this.newEmployee = { ...selectedEmployee };
}
updateEmployee(event: any): void {
  const updatedEmployee: Employee = event.data;
  this.apiService.updateEmployee(updatedEmployee).subscribe(
    (response: Employee) => {
      // Güncellenen çalışanı liste üzerinde güncelle
      const index = this.employee.findIndex(e => e.id === updatedEmployee.id);
      if (index !== -1) {
        this.employee[index] = response;
      }
    },
    (error: any) => {
      console.log(error);
    }
  );
}
openPopup() {
  this.isPopupOpen = true;
}

closePopup() {
  this.isPopupOpen = false;
}

  clearEvents() {
    this.events = [];
  }
  addNewEmployee(): void {
    console.log(this.newEmployee);
    this.newEmployee.countryCode = this.selectedCountryCode;
    this.apiService.addEmployee(this.newEmployee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getData();
        this.isPopupVisible = false;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  refreshDataGrid(): void {
    if (this.grid) {
      this.grid.instance.refresh();
    }
  }
  countries: any;
  loadCountries(): void {
    this.dashboardiService.getCountries().subscribe(
      (countries: any[]) => {
        this.countries = countries.map(country => ({
          code: country.code,
          definition: country.definition
        }));
        if (this.countries.length > 0) {
          this.selectedCountryCode = this.countries[0].code;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
}


