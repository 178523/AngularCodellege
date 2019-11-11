import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { AboutComponent } from './components/about/about.component';
import { InformacionProductoComponent } from './components/informacion-producto/informacion-producto.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'store', component: StoreComponent },
    { path: 'about', component: AboutComponent },
    { path: 'informacionProducto/:id', component: InformacionProductoComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);