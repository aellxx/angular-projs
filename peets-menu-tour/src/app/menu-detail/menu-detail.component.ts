import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    private activatedRoute: ActivatedRoute, 
    private location: Location,
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }
  // data passed from parent class: user @Input to declare as property 
  @Input() menu?: Menu;

  getMenu(): void {
    
  }

}
