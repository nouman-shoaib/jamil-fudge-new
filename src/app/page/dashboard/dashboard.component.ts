import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/shared/services/common-api.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  joblists: any;
  contentArray = new Array(90).fill('');
  returnedArray: any;
  users: any;
  comments: any;
  constructor(private commonApiService: CommonApiService) {}

  getNews() {
    this.commonApiService.getNews().subscribe((data: any) => {
      this.contentArray = data;
      this.returnedArray = this.contentArray.slice(0, 4);
      console.log('data', data);
    });
  }

  getComments() {
    this.commonApiService.getComments().subscribe((data: any) => {
      this.comments = data;
      console.log('comments', data);
    });
  }

  getUsers() {
    this.commonApiService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log('users', data);
    });
  }

  ngOnInit(): void {
    this.getNews();
    this.getComments();
    this.getUsers();
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }
}
