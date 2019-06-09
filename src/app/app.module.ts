import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from './shared/image.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MasonryModule } from 'angular2-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
