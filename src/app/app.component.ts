import { Component } from '@angular/core';
import { GainsightService } from 'projects/quasarke/ng-gainsight/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private gainsight: GainsightService) {
    this.gainsight.initGainSight({ user:{ id: '1', email: 'bob@bob.com'}, account: {id:'1', name:'acme'}})
  }
}
