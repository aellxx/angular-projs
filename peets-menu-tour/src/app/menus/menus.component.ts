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
  selectedMenu?: Menu; 

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

}
