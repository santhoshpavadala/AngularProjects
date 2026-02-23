import { Component } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio-service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, MatCardModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

contact: any;

constructor(private portfolioService: PortfolioService) {}

ngOnInit() {
  this.portfolioService.getContact().subscribe(res => {
    this.contact = res;
  });
}

}
