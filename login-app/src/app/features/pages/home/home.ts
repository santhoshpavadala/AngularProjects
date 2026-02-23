import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PortfolioService } from '../../../core/services/portfolio-service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatProgressBar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  profile: any;
  skills: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe(
      (resp)=>{
        this.profile=resp
      }
    )

    this.portfolioService.getSkills().subscribe((resp)=>{
      this.skills = resp
    })
  }
}
