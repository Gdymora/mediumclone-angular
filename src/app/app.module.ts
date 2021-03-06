import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from 'src/app/auth/auth.module'
import { environment } from 'src/environments/environment'
import { EffectsModule } from '@ngrx/effects'
import { TopBarModule } from 'src/app/shared/modules/topBar/topBar.module'
import { PersistanceService } from './shared/services/persistance.service'
import { AuthInterceptor } from './shared/services/authinterceptor.service'
import { GlobalFeedModule } from './globalFeed/globalFeed.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    // Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
    StoreRouterConnectingModule.forRoot(),
    TopBarModule,
    GlobalFeedModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
