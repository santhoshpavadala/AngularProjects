import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio-service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatCardModule, ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit{
  projects: any[] = [];
  constructor(private portfolioService: PortfolioService ) {}
  ngOnInit() {
    this.portfolioService.getProjects().subscribe(res => {
      this.projects = res;
    });
  }
}
