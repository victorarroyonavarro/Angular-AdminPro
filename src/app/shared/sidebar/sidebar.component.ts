import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
menuItems:any[];

  constructor(private sideService:SidebarService) {

   this.menuItems= this.sideService.menu;

   console.log(this.menuItems)
  }

  ngOnInit(): void {
  }

}
