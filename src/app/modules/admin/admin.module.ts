import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { EmployeesComponent } from './layout/employees/employees.component';
import { HomeComponent } from './layout/home/home.component';
import {  DxBulletModule, DxButtonModule, DxChartModule, DxDataGridComponent, DxDataGridModule, DxDateBoxModule, DxHtmlEditorModule, DxListModule, DxMenuModule, DxPieChartModule, DxPivotGridModule, DxPopupModule, DxSelectBoxModule, DxSpeedDialActionModule, DxTabPanelModule, DxTabsModule, DxTemplateModule, DxTextBoxModule, DxToolbarModule, DxTreeViewModule, DxValidatorModule } from 'devextreme-angular';
import { RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog'
import { DxiItemModule, DxoOptionsModule } from 'devextreme-angular/ui/nested';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    EmployeesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    RouterLink,
    
    DxDataGridModule,
    DxTemplateModule,
    DxMenuModule,
    DxTextBoxModule,
    DxButtonModule,
    DxTabPanelModule,
    DxPopupModule,
    DxToolbarModule,
    DxiItemModule,
    DxTreeViewModule,
    DxTemplateModule,
    DxTabsModule,
    DxSelectBoxModule,
    DxSpeedDialActionModule,
    DxBulletModule,
    DxDateBoxModule,
    DxHtmlEditorModule,
    DxPivotGridModule,
    DxChartModule,
   DxListModule,
   DxiItemModule,
   DxoOptionsModule,
   DxPieChartModule,

    FormsModule,
    RouterModule,
  
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule
  
    
  ]
})
export class AdminModule { }
