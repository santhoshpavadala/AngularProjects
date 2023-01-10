import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  // styleUrls: ['./warning-alert.component.scss']

  styles: [`
  p {
    background-color: red;
    color: white;
    padding: 10px;
  }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
