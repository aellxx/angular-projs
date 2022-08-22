import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  // get ready to get menus data
  menus: Menu[] = [];

  // bring in MenuService in constructor
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    // load the data when componenet is initialized 
    this.getMenus();
  }

  // getter function to get Observable object and extract data
  getMenus(): void {
    this.menuService.getMenus().subscribe(menus => this.menus = menus.slice(0, 5));
  }

}
