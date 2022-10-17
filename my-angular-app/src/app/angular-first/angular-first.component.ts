import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-first',
  templateUrl: './angular-first.component.html',
  styleUrls: ['./angular-first.component.scss']
})
export class AngularFirstComponent implements OnInit {
  greetings = 'First Angular Component';
  ngmodelexample = 'ngModel example';
  constructor() { }

  ngOnInit(): void {
  }

}
