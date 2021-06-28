import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdvisorComponent } from './page/advisor/advisor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyPerformanceComponent } from './page/dashboard/my-performance/my-performance.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PageComponent,
    AdvisorComponent,
    MyPerformanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    PaginationModule,
    HttpClientModule,

    ChartsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      animationDuration: 300,
      backgroundPadding: 10,
      space: -2,
      outerStrokeColor: '#C7E596',
      innerStrokeColor: '#e7e8ea',
      animateTitle: false,
      showUnits: true,
      clockwise: true,
    }),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
