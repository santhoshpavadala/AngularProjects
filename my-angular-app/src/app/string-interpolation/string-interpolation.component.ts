import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {
serverId: number = 10;
serverStatus: string = 'Offline'

// Calling from the method in string interpolation
 getServerStatus() {
  return this.serverStatus;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
