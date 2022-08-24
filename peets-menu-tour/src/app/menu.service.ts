import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { Observable, of, catchError, tap } from 'rxjs';    // RxJS for data management 
import { MessageService } from './message.service';             // to log messages
import { HttpClient, HttpHeaders } from '@angular/common/http'; // to get data from server


@Injectable({
  providedIn: 'root'
})

export class MenuService {

  // URL to web API
  //    api: base -> where the HTTP request is made
  //    heros: collectionName -> the database
  private menusURL = 'api/menus';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // send messageService as a private parameter
  constructor(
    private messageService: MessageService, 
    private http: HttpClient
  ) { }

  // Service array getter
  getMenus(): Observable<Menu[]> {
    // get menus from the internal server: the .get() method returns an Observable object
    const menus = this.http.get<Menu[]>(this.menusURL)
      .pipe(
        tap(_ => this.logMessage("fetched menu data")),
        catchError(this.handleError<Menu[]>('getMenus', []))
      );
    // return Observable of an array of Menus
    return menus;
  } 

  // Service individual menu getter
  getMenuById(id: string): Observable<Menu> {
    // get-by-id request supported by the API using api/database/:id => api/menus/americano
    const url = `${this.menusURL}/${id}`;
    // get menu with corresponding id
    const menu = this.http.get<Menu>(url)
      .pipe(
        tap(_ => this.logMessage(`fetched menu data with menu id: ${id}`)), // signal: finish getting menu
        catchError(this.handleError<Menu>(`getMenu() id = ${id}`))
      );
    // return Observable of type Menu
    return menu;
  }

  // refractor logging message 
  logMessage(message: string): void {
    this.messageService.add(`MenuService: ${message}`);
  }

  // Error handling function 
  private handleError<T>(operation="operation", result?: T) {
    // return a function that returns a Observable of type T
    return (error: any): Observable<T> => {
      // log the error to the console and the UI
      console.error(error);
      this.logMessage(`${operation} operation failed: ${error.message}`);
      // return an empty result
      return of(result as T);
    }
  }

  addNewMenu(newMenu: Menu) {
    // make a new menu object with a POST request
    return this.http.post<Menu>(this.menusURL, newMenu, this.httpOptions).pipe(
        tap((menu: Menu) => this.logMessage(`added new menu "${menu.id}"`)),
        catchError(this.handleError<Menu>('addNewMenu'))
      );
  }

  deleteMenu(deleteId: string) {
    const urlToDelete = `${this.menusURL}/${deleteId}`;

    return this.http.delete<Menu>(urlToDelete, this.httpOptions).pipe(
      tap(_ => this.logMessage(`deleted Menu with id ${deleteId}`)), 
      catchError(this.handleError<Menu>("delteMenu")),
    );
  }

}
