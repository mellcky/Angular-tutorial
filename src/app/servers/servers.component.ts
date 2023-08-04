import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  //properties
  allowNewServer = false;
  serverCreationStatus = ' No server was created!';
  serverName = '';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2500);
  }
  ngOnInit() {}

  // methods on properties
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'server was successful created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
