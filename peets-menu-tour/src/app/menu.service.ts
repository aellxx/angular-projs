import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { MENUS } from './menus';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  // send messageService as a private parameter
  constructor(private messageService: MessageService) { }

  // Service array getter
  getMenus(): Observable<Menu[]> {
    // get all the menus in the form of OBservables
    const menus = of(MENUS);
    // signal: finish getting data
    this.messageService.add("MenuService: fetched menu data");
    // return Observable of an array of Menus
    return menus;
  } 

  // Service individual menu getter
  getMenu(id: string): Observable<Menu> {
    // get menu with corresponding id
    const menu = MENUS.find(menuToFind => menuToFind.id === id)!;
    console.log(menu);
    // signal: finish getting menu
    this.messageService.add(`MenuService: fetched menu data with menu id: ${id}`);
    // return Observable of type Menu
    return of(menu);
  }

}
