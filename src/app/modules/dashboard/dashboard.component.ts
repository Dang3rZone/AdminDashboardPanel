import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  Cards = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.Cards = this.dashboardService.cards();
  }
}
