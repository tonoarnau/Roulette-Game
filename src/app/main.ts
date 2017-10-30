import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import '../../node_modules/web-animations-js/web-animations.min.js';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
