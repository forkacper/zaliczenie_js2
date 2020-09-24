import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AboutMeComponent} from './about-me/about-me.component';
import { CreateGistComponent } from './exam/create-gist/create-gist.component';
import { EditGistComponent } from './exam/edit-gist/edit-gist.component';
import { DeleteGistComponent } from './exam/delete-gist/delete-gist.component';
import { ListGistComponent } from './exam/list-gist/list-gist.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'create-gist', component: CreateGistComponent},
  {path: 'edit-gist', component: EditGistComponent},
  {path: 'delete-gist', component: DeleteGistComponent},
  {path: 'list-gist', component: ListGistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
