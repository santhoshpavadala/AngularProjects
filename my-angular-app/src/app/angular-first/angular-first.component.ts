import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-first', //this is default selector
  // selector: '[app-angular-first]', //this is array calling of components selectors
  // selector: '.app-angular-first', //this is css selector, before the dot will adds


  templateUrl: './angular-first.component.html',
  // template: '<app-angular-first></app-angular-first>', for calling component from here also
  // template: `
  // <app-angular-first></app-angular-first>
  // `, 
  // THIS BACKQUOTES U CAN ALSO Multi line &  USE LIKE HTML Component file

  styleUrls: ['./angular-first.component.scss']
  // styles: [`
  // h3 { color: red; }
  // `]
})
export class AngularFirstComponent implements OnInit {
  greetings = 'First Angular Component';
  ngmodelexample = 'ngModel example';



  




  constructor() { }

  ngOnInit(): void {
  }

}
