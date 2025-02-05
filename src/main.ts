import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppModule } from 'src/app/app.module';
import { AppComponent } from 'src/app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { log } from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import { provideAnimations } from '@angular/platform-browser/animations';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
platformBrowserDynamic().bootstrapModule(AppModule,{
        providers: [
            provideAnimations(),
        ]
    })
    .catch(err => console.log(err))