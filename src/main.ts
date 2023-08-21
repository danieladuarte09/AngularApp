import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) // Modulo raíz que debe cargar la aplicación 
  .catch(err => console.error(err));
