import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { MENUS } from './menus';
import { Observable, of } from 'rxjs';                          // get menus data in the form of Observable objects
import { MessageService } from './message.service';             // to log messages
import { HttpClient, HttpHeaders } from '@angular/common/http'; // to get data from server
import { catchError, map, tap } from 'rxjs';                    // to handle errors


@Injectable({
  providedIn: 'root'
})

export class MenuService {

  // URL to web API
  //    api: base -> where the HTTP request is made
  //    heros: collectionName -> the database
  private menusURL = 'api/menus';

  // send messageService as a private parameter
  constructor(
    private messageService: MessageService, 
    private http: HttpClient
  ) { }

  // Service array getter
  getMenus(): Observable<Menu[]> {
    // get menus from the internal server 
    const menus = this.http.get<Menu[]>(this.menusURL);
    console.log("menus: ", menus);
    // signal: finish getting data
    this.logMessage("fetched menu data");
    // return Observable of an array of Menus
    return menus;
  } 

  // Service individual menu getter
  getMenu(id: string): Observable<Menu> {
    // get menu with corresponding id
    const menu = MENUS.find(menuToFind => menuToFind.id === id)!;
    // signal: finish getting menu
    this.logMessage(`fetched menu data with menu id: ${id}`);
    // return Observable of type Menu
    return of(menu);
  }

  // refractor logging message 
  logMessage(message: string): void {
    this.messageService.add(`MenuService: ${message}`);
  }

}
