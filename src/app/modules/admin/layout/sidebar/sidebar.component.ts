import { Component, OnInit } from '@angular/core';
import { SidebarService, MenuItem } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.menuItems = this.sidebarService.getMenuItems();
  }
}