import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  template: '',
  styleUrls: ['./directives.component.scss'],
  styles: [`
  .online { color: white; }
  `]
})
export class DirectivesComponent implements OnInit {
  ngIfServerName: string = "ngIf Test Server"
  ngIfServerStatus: string = "No Server was Created";
  serverCreated = false;

  serverId: number = 10;
  serverStatus: string = "Offline";

  servers= ['Testserver', 'Testserver2'];

  showSecret= false;
  log = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    // Math.random returns 0 to 1  between the values only
   }

  ngOnInit(): void {
  }

  onCreatengIfEvent () {
    this.serverCreated = true;
    this.ngIfServerStatus="New Server Was Created. Name is " + this.ngIfServerName;
    // this.servers.push(this.ngIfServerName);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  

  onToggleDetails () {
    this.showSecret = !this.showSecret;
    // Below code is not working as input from course
    // this.log.push(this.log.length + 1);
    // this.log.push(new Date());
  }
}
