import { CalculatePricePipe } from './calculate-price.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CalculatePricePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
