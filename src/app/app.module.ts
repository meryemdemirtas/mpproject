import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DxBulletModule, DxButtonModule, DxDataGridComponent, DxDataGridModule, DxSelectBoxModule, DxSpeedDialActionModule, DxTemplateModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesService } from './modules/admin/layout/employees/employees.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    DxButtonModule,
    DxTextBoxModule,
    DxValidatorModule,
    AppRoutingModule,
    DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
  DxiItemModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  
    
  
  ],
  providers: [{ provide: "apiUrl", useValue: "http://posapi.meetingpointturkey.com/" }, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
