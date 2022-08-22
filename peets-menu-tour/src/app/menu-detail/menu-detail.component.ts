import { Component, OnInit, Input } from '@angular/core';
import { Menu } from "../menu";

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // data passed from parent class: user @Input to declare as property 
  @Input() menu?: Menu;

}
