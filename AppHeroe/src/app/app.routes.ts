import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {HeroeinformacionComponent} from './components/heroeinformacion/heroeinformacion.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroeinformacion/:id', component: HeroeinformacionComponent },
    { path: 'buscarHeroe/:termino', component: BuscarHeroeComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes); 