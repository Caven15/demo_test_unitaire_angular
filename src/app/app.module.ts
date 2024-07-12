import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatriceComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
