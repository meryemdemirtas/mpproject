import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems = [
      { id: '1', text: 'Home', link: '/admin' },
      { id: '2', text: 'Dashboard', link: '/admin/dahboard' },
      { id: '3', text: 'Employees', link: '/admin/employees' }
    ];
  }

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}

export interface MenuItem {
  id: string;
  text: string;
  link: string;
}