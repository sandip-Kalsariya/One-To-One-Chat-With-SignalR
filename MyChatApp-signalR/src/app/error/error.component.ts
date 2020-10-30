import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit,AfterViewInit {

  constructor(
    private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("Error");
  }

  ngAfterViewInit() { }

}
