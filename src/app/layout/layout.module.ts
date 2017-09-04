import { RouterModule } from '@angular/router';
import { LayoutRouteModule } from './layout-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout-component';
import { NgModule} from '@angular/core';
@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        LayoutRouteModule
    ],
    exports: [LayoutRouteModule
    ],
    declarations: []
})
export class LayoutModule {

}