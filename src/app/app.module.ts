import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ComponentsComponent } from './components/components.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: ComponentsComponent },
  { path: 'favorites', component: FavoritesComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentsComponent,
    ButtonComponent,
    ModalComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],

  // exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
