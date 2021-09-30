import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { environment} from "../../../environments/environment";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  myForm : FormGroup;
  constructor(){
    this.myForm = new FormGroup({
      "first_name": new FormControl(""),
      "sec_name": new FormControl(""),
      "tax_number": new FormControl(""),
      "email": new FormControl(""),
      "company": new FormControl(""),
    });
  }

  submit(){
    console.log(this.myForm);
  }

  ngOnInit(): void {
  }

}
