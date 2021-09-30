import { Component, OnInit } from '@angular/core';
import {AppAddClientService} from "./add-client/add-client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(
    addClientService: AppAddClientService,
  ) {

  }

  ngOnInit(): void {
  }

}
