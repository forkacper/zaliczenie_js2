import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateGistComponent } from './exam/create-gist/create-gist.component';
import { FormsModule } from '@angular/forms';
import { EditGistComponent } from './exam/edit-gist/edit-gist.component';
import { DeleteGistComponent } from './exam/delete-gist/delete-gist.component';
import { ListGistComponent } from './exam/list-gist/list-gist.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutMeComponent,
    CreateGistComponent,
    EditGistComponent,
    DeleteGistComponent,
    ListGistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
