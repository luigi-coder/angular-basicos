import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // cosas visibles afuera de este modulo <app-listado></app-listado>
        ListadoComponent
    ],
    imports: [ // aca adentro van modulos
        CommonModule
    ]
})
export class HeroesModule {

}