import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debugging',
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.scss']
})
export class DebuggingComponent implements OnInit {
  servers = [];
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    // actual code getting error
    // this.servers.push('Another Server'); 
    this.servers.push();
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }
}
