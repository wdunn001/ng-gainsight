import { APP_INITIALIZER, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { GainsightOptions } from './gainsight.model';
import { GainSightPipe } from './gainsight.pipe';
import { GainsightService } from './gainsight.service';

declare var aptrinsic: any;
export const OPTIONS = new InjectionToken<string>('OPTIONS');

export function initialize(options: GainsightOptions) {
  return function () {
    const source = options.scriptSource ? options.scriptSource : 'https://web-sdk.aptrinsic.com/api/aptrinsic.js';
    const scriptName: any = 'aptrinsic';
    window[scriptName] = window[scriptName] || ((...args: any[]) => {
      (window[scriptName]['q'] = window[scriptName]['q'] || []).push(...args);
    });
    window[scriptName]['p'] = options.tagKey;
    const newScript = document.createElement('script');
    newScript.async = !0, newScript.src = source + '?a=' + options.tagKey;
    const scriptTags = document.getElementsByTagName('script')[0];
    if (scriptTags) {
     scriptTags?.parentNode?.insertBefore(newScript, scriptTags);
    } else {
      throw 'no scriptTag found';
    }
    if (options.config) {
      aptrinsic('identify',
      options.config.user,
      options.config.account);
    }
  };
}

@NgModule({
  declarations: [GainSightPipe],
  imports: [
  ],
  exports: [GainSightPipe],
  providers: [GainsightService]
})
export class GainsightModule {
  static forRoot(options: GainsightOptions): ModuleWithProviders<GainsightModule> {
    return {
      ngModule: GainsightModule,
      providers: [
        {provide: OPTIONS, useValue: options},
        {
          provide: APP_INITIALIZER,
          useFactory: initialize,
          deps: [OPTIONS],
          multi: true
        }
      ]
    };
  }
}
