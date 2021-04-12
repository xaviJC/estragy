import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule  } from "@angular/common/http";
import { ReloadComponent } from './pages/reload/reload.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { DatabasePageComponent } from './pages/database-page/database-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReloadComponent,
    CitiesComponent,
    DatabasePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
