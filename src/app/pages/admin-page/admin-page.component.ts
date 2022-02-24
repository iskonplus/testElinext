import { Component, OnInit } from '@angular/core';
import { AdminPageService } from 'src/app/services/admin-page.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  users = [];

  constructor(private adminPageService: AdminPageService ) { }

  ngOnInit(): void {
    this.users = this.adminPageService.getUsers();
  }

}
