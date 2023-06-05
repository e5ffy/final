import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RouterModule } from '@angular/router';
import { ResturantsComponent } from './resturants/resturants.component';
import { ToursComponent } from './tours/tours.component';
import { DestinationComponent } from './destination/destination.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
   routingComponent,
   ResturantsComponent,
   ToursComponent,
   DestinationComponent,
   ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'hotels', component: HotelsComponent},
      {path: 'resturants', component: ResturantsComponent},
      {path: 'tours', component: ToursComponent},
      {path: 'destination', component: DestinationComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
