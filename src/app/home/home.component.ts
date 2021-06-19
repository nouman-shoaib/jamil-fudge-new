import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isScroll: Boolean = false;

  constructor() {}
  scrollContainer() {
    this.isScroll = !this.isScroll;
  }
  ngOnInit(): void {}
}
