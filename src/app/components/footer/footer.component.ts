import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  closed_1: boolean = false;
  closed_2: boolean = false;
  closed_3: boolean = false;
  closed_4: boolean = false;
  closed_5: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
