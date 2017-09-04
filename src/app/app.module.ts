import { VideoModule } from './video/video.module';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
