import { NgModule } from '@angular/core';
import { RouteModule, Routes, RouterModule } from '@angular/router';

import { VideoListComponent } from './src/app/video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const appRoutes: Routes = [
    {
    path: "videos",
    component: VideoListComponent,
    },
    {
    path: "videos/:slug",
    component: VideoDetailComponent,
    }
]

@NgModule({
        imports:[
            RouterModule.forRoot(
                appRoutes
            )
        ],
        exports: [
            RouterModule
        ]
})
export class AppRoutingModule {}