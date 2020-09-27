import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AulaComponent } from './aula/aula.component';
import { ListAulaComponent } from './list-aula/list-aula.component';

@NgModule({
  declarations: [
    AppComponent,
    AulaComponent,
    ListAulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
