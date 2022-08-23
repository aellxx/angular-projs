import { Component, OnInit } from '@angular/core';
import { Menu } from "../menu";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  menu: Menu | undefined;

  constructor(
    private route: ActivatedRoute, // fetching page information 
    private location: Location, // interact with browser; for moving back to previous page
    private menuService: MenuService, // fetching data
  ) { }

  ngOnInit(): void {
    // get the menu item on initialization
    this.getMenu();
  }

  getMenu(): void {
    // get id from the URL route
    const id: string = String(this.route.snapshot.paramMap.get('id'));
    // assign menu property with the correct menu from MENUS
    this.menuService.getMenuById(id).subscribe(menu => this.menu = menu);
  }

  // click event handler: go back to the previous page on click 
  goBackOnClick() {
    this.location.back();
  }

}
