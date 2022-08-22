import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { MENUS } from './menus';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private messageService: MessageService) { }

  // Service array getter
  // return an Observable<Menu[]> object
  // get Menus asynchronously & add signaling msg accordingly 
  getMenus(): Observable<Menu[]> {
    const menus = of(MENUS);
    this.messageService.add("MenuService: fetched menu data")
    return menus;
  } 

}
