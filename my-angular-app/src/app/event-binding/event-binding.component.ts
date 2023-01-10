import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  serverCreationStatus = "No Server Was Created!";
  serverName = '';
  serverInputName='Test Server';
  userName = '';
  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer () {
    this.serverCreationStatus = "New Server Was Created!";
  }

  onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateComibiningall() {
    this.serverCreationStatus = "New Server Was Created. Name is " + this.serverInputName;
  }

}
