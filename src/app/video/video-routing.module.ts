import { VideoListComponet } from './video-list/video-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: VideoListComponet }
    ])],
    exports: [RouterModule]
})

export class VideoRoutingModule{
    
}