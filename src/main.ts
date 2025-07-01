// DEBE SER LA PRIMERA LÍNEA
import 'zone.js';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { env } from 'process';


bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
console.log(environment.firebase.apiKey);

