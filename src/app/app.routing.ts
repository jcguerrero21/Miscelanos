import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { USUARIO_ROUTES } from './components/usuario/usuario.routing';

const APP_ROUTES: Routes = [
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: USUARIO_ROUTES
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'inicio'
    }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);