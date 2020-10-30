import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from '../shared/service';


@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {
  public title: any;
  public transResult: any;
  public loggedUsername: string;

  constructor(
    private titleService: Title,
    private router: Router,
    private _dataService: DataService) {
    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    this.loggedUsername = loggedUser.userName;
  }

  ngOnInit() {
    this.titleService.setTitle("Backoffice");
  }

  ngAfterViewInit() {

  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.router.navigate(['/login']);
  }

}
