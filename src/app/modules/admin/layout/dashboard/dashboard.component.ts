import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  countries: any[] = [];
  country: any = {};
  editedCountry: any = {}; 
  isEditing = false; 
  dataSource!: DataSource;
  constructor(private dashboardService: DashboardService) {
    this.country = dashboardService.getCountries();
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.dashboardService.getCountries()
      .subscribe(
        (response: any[]) => {
          this.countries = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  collapsed = false;
  contentReady = (e:any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };
  addCountry(country: any) {
    this.dashboardService.addCountry(country)
      .subscribe(
        (response) => {
          console.log('Country added successfully!');
          this.getCountries();
          this.country = {};
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateCountry() {
    const code = this.editedCountry.code;
    const country = this.editedCountry;
    this.dashboardService.updateCountry(code, country)
      .subscribe(
        (response) => {
          console.log('Country updated successfully!');
          this.isEditing = false;
          this.editedCountry = {};
          this.getCountries();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteCountry(code: number) {
    this.dashboardService.deleteCountry(code)
      .subscribe(
        (response) => {
          console.log('Country deleted successfully!');
          this.getCountries();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  editCountry(country: any) {
    this.editedCountry = { ...country }; 
    this.isEditing = true;
  }

  cancelEdit() {
    this.isEditing = false;
    this.editedCountry = {};
  }
}