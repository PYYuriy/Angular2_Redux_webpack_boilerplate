import { HttpModule, BrowserXhr }           from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, APP_BASE_HREF }      from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules }  from '@angular/router';
import { BrowserModule  }                   from '@angular/platform-browser';

/* Libs
*/
import { NgReduxModule } from 'ng2-redux';
// import {MaterialModule} from '@angular/material';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './routes/app.routes';
import { ACTION_PROVIDERS } from './redux/actions/index';
import { APP_RESOLVER_PROVIDERS, SERVICES } from './services/index';

// App is our top level component

import { AppComponent } from './containers/app.component';
import { UTILS } from "./utils/index";
import { PIPES } from "./pipes/index";
import { CONTAINERS } from "./containers/index";
import { MULTIPLE_COMPONENTS } from "./multiple-components/index";
import { DIRECTIVES } from "./directives/index";

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  NgReduxModule,
  {provide: APP_BASE_HREF, useValue: ''},
  {provide: BrowserXhr}
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    ...CONTAINERS,
    ...PIPES,
    ...MULTIPLE_COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // MaterialModule.forRoot(),
    CommonModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules  })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ...UTILS,
    SERVICES,
    ENV_PROVIDERS,
    APP_PROVIDERS,
    ACTION_PROVIDERS
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
