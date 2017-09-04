import { VideoListComponet } from './video-list/video-list.component';
import { VideoRoutingModule } from './video-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        VideoRoutingModule

    ],
    declarations: [
        VideoListComponet
    ],
    exports: [VideoRoutingModule],
    providers: []

})
export class VideoModule {

}