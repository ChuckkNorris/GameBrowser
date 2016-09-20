import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Http, HttpModule, ConnectionBackend } from '@angular/http';
@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],

  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
