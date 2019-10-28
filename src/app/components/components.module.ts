import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltrosComponent } from './filtros/filtros.component';
import { StarsComponent } from './stars/stars.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AngularFontAwesomeModule
    ],
    exports: [
        FiltrosComponent,
        StarsComponent,
        AmenitiesComponent,
    ],
    declarations: [
        FiltrosComponent,
        StarsComponent,
        AmenitiesComponent,
    ],
    providers: [],
})
export class ComponentsModule { }
