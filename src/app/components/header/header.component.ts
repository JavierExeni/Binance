import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  body = document.body;


  isClosed: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.body.classList.add('side-closed');
  }

}
