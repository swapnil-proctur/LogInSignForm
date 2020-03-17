import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
              { path: '', redirectTo: '/authPage', pathMatch: 'full' },
              {
                  path: 'authPage',
                  loadChildren: './components/auth-page/auth-page.module#AuthPageModule'
              },
              { path: 'profile',
                component: ProfileComponent
              },
              { path: '**',
                redirectTo: '/authPage',
                pathMatch: 'full'
              }
            ],
            {
                useHash: true,
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        /* CanDeactivateGuard */
    ]
})
export class AppRoutingModule { }
