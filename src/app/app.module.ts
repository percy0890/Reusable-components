import { PostService } from './services/post.service';
import { HttpClient } from 'selenium-webdriver/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TileCasingComponent } from './tile-casing/tile-casing.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { HttpCallsComponent } from './http-calls/http-calls.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    TileCasingComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    HttpCallsComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
