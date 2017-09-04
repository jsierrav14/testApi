import { VideoModule } from './video/video.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export function getVideoModule() {
    return VideoModule;
}

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppComponent, loadChildren: getVideoModule }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {

}