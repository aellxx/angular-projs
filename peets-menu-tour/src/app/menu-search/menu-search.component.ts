import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.scss']
})
export class MenuSearchComponent implements OnInit {
  
  // $ shows that searchedMenus is an ARRAY of Observables
  searchedMenus$!: Observable<Menu[]>;
  private searchTerms = new Subject<string>();

  constructor(private menuService: MenuService) { }

  searchOnInput(term: string): void{
    // Subjects are both Observables AND Observers
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchedMenus$ = this.searchTerms.pipe(
      // wait 300 ms
      debounceTime(300),
      // ignore new term if same as before
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.menuService.searchMenu(term)),
    )
  }
}
