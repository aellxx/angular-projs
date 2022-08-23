import { Component, OnInit } from '@angular/core';
import { Menu } from "../menu";
// import { MENUS } from "../menus";
// use services instead
import { MenuService } from "../menu.service";
import { MessageService } from '../message.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  // states
  menus: Menu[] = [];

  // add private parameter menuService to get the service
  constructor(private menuService: MenuService, public messageService: MessageService) { }

  ngOnInit(): void {
    // call the getter of Menus
    this.getMenus();
  }

  // function to get menus data from the service
  // do NOT call in constructor (keep empty) -> use ngOnInit() instead: get menus AFTER component is constructed
  getMenus(): void {
    // asynchronously assign menus from service to this.menus
    this.menuService.getMenus()
      .subscribe(menus => this.menus = menus);
  }

  private trimInput(userInputInfo: string): string {
    return userInputInfo.trim()
  }

  // click event handler to submit new menu
  addNewMenuOnClick(name: string, description: string, price: string, imageId: string) {
    if (!name || !description || !price || !imageId) {
      alert("Fields left blank!");
      return; 
    } else {
      // generate id
      const id = this.trimInput(name).replace(/\s+/g, '-').toLowerCase();
      // add menu to the server database
      this.menuService.addNewMenu({id, name, price: parseFloat(price), description, imageId} as Menu)
        .subscribe(menu => {
          this.menus.push(menu)
        });
    }
  }
}
