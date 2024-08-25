import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as AOS from 'aos';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
    enableProdMode();
  }
  
  AOS.init();
  
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
