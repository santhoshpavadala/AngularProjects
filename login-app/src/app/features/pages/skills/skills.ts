import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio-service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, MatCardModule, MatProgressBarModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  skills: any[] = []

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getSkills().subscribe(res => {
      this.skills = res;
    });
  }

   

}
