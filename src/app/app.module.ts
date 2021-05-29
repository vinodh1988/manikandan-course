import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenubarComponent } from './common/menubar/menubar.component';
import { AddressComponent } from './pages/contact/address/address.component';
import { ServiceItemComponent } from './pages/home/service-item/service-item.component';
import { FormComponent } from './pages/home/form/form.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './pages/home/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MenubarComponent,
    AddressComponent,
    ServiceItemComponent,
    FormComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
