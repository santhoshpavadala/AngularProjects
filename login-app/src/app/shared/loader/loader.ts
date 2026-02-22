import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../core/services/loading-service';

@Component({
  selector: 'app-loader',
  imports: [ CommonModule, NgIf, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {
constructor(public loadingService: LoadingService) {
  console.log('Loader component initialized');
}
}
