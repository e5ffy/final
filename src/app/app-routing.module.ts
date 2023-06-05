import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationComponent } from './destination/destination.component';

const routes: Routes = [
{path:"hotels" ,component:HotelsComponent},
{path:"home" ,component:HomeComponent},
{path:"navbar" ,component:NavbarComponent},
{path:"resturants" ,component:ResturantsComponent},
{path:"contact" ,component:ContactComponent},
{path:"destination" ,component:DestinationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[HotelsComponent]