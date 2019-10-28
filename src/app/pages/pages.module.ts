import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HotelesComponent } from './hoteles/hoteles.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        AngularFontAwesomeModule,
        PipesModule
    ],
    exports: [],
    declarations: [
                HotelesComponent,
        HotelComponent,
        HotelViewComponent,
    ],
    providers: [],
})
export class PagesModule { }
