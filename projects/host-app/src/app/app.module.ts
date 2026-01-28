import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routeCompArr} from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
//import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //TodoComponent
    routeCompArr
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
