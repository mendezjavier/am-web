
import { RouterModule, Routes } from "@angular/router";
import { HotelesComponent } from './pages/hoteles/hoteles.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { HotelViewComponent } from './pages/hotel-view/hotel-view.component';

const appRoutes: Routes = [
    { path: 'hoteles', component: HotelesComponent },
    { path: 'hotel/:id', component: HotelViewComponent },
    {path: '**', redirectTo: 'hoteles'}
   ];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
