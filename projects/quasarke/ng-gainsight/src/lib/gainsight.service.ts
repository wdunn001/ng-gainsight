import { Injectable } from '@angular/core';
import { GainSightConfig } from './gainsight.model';
declare var aptrinsic: any;
@Injectable({
  providedIn: 'root'
})
export class GainsightService {

  constructor() { }

  InjectGainSight(tagKey: string, scriptSource: string = 'https://web-sdk.aptrinsic.com/api/aptrinsic.js') {
    const scriptName: any = 'aptrinsic';
    window[scriptName] = window[scriptName] || ((...args: any[]) => {
      (window[scriptName]['q'] = window[scriptName]['q'] || []).push(...args);
    });
    window[scriptName]['p'] = tagKey;
    const newScript = document.createElement('script');
    newScript.async = !0, newScript.src = scriptSource + '?a=' + tagKey;
    const scriptTags = document.getElementsByTagName('script')[0];
    if (scriptTags) {
     scriptTags?.parentNode?.insertBefore(newScript, scriptTags);
    } else {
      throw 'no scriptTag found';
    }
  }

  initGainSight(gainSightConfig: GainSightConfig) {
        aptrinsic('identify',
          gainSightConfig.user,
          gainSightConfig.account);
  }
}
