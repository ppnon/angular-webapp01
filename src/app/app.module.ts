import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/****** Modules ******/
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from './theme/config/config.service';
import { PostsService } from './theme/jsonplaceholder/posts.service';
import { HomeComponent } from './pages/home/home.component';
import { DefaultImgPipe } from './theme/pipe/default-img.pipe';

// google maps
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './pages/maps/maps.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultImgPipe,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // google maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDys0wL7kOTG9gszPaz6xl2Kw8ooqEl0pg'
    })
  ],
  providers: [
    ConfigService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
