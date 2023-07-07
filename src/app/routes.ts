import { Routes } from "@angular/router";
import { FilmesComponent } from "./components/filmes/filmes.component";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'nav', component: NavComponent },
  // Outras rotas que você possa ter
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para a página inicial quando nenhum caminho é especificado
  { path: '**', redirectTo: '/home' } // Redireciona para a página inicial quando uma rota inválida é especificada
];
