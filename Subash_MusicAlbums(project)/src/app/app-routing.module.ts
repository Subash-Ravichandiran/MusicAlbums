import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"musics",component:HomeComponent},  
  {path:"musics/:image/:name/:album/:singer/:m_director/:lyricist",component:ArtistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
