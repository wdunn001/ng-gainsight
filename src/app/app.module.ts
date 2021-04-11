import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GainsightModule } from 'projects/quasarke/ng-gainsight/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GainsightModule.forRoot({ tagKey: 'XX-XXXXXX' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
