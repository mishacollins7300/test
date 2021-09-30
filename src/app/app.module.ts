import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from './main/main.component';
import {ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes =[
  { path: 'main', component: MainComponent},
  { path: 'clients', component: ClientComponent},
  { path: 'addclients', component: AddClientComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AddClientComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
