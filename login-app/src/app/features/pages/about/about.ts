import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio-service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule, MatCardModule,],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  profile: any;
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe(
      (resp)=>{
        this.profile = resp
      }
    )
  }
}
