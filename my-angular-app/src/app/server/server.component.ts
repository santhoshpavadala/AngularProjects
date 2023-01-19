import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  ngIfServerName: string = "ngIf Test Server"
  ngIfServerStatus: string = "No Server was Created";
  serverCreated = false;

  serverId: number = 10;
  serverStatus: string = "Offline";

  servers= ['Testserver', 'Testserver2'];
  constructor() { }

  ngOnInit(): void {
  }

  onCreatengIfEvent () {
    this.serverCreated = true;
    this.ngIfServerStatus="New Server Was Created. Name is " + this.ngIfServerName;
    this.servers.push(this.ngIfServerName);
  }
}
