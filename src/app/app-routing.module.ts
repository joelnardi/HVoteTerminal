import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'resultados-mesa',
    loadChildren: () => import('./resultados-mesa/resultados-mesa.module').then(m => m.ResultadosMesaPageModule)
  },
  {
    path: 'lector-votos',
    loadChildren: () => import('./lector-votos/lector-votos.module').then(m => m.LectorVotosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
