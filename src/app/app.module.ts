import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DataModule } from './data/data.module';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { reducer } from './reducers/user.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule,
    StoreModule.forRoot({ user: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
