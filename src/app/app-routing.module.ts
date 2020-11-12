import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterInfoComponent } from './pages/character-info/character-info.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
