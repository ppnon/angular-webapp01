import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/****** Modules ******/
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from './theme/config/config.service';
import { PostsService } from './theme/jsonplaceholder/posts.service';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
