import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
// Este componente fue creado automaticamente 
// OnInit el primer ciclo de vida que vemos 
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hukl','Thor','Cápitan América'];
  heroeBorrado: string | undefined = '';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
   
    //this.heroes.splice(3,1);
  }
  
}
