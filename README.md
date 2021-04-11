# NgGainsight

This library is meant to integrate with gainsight px and make it easy for angular developers to use it.


## Install

```
npm i --save @quasarke/ng-gainsight
```
in a module
```
  imports: [
    ...
    GainsightModule.forRoot({ tagKey: 'XX-XXXXXX' })
    ...
  ],
```
in a componet or service once you have account and user data

```
  constructor(private gainsight: GainsightService) {
    this.gainsight.initGainSight({ user:{ id: '1', email: 'bob@bob.com'}, account: {id:'1', name:'acme'}})
  }
```
There is also a pipe that allows you to add classes easily in the gpx format

```
<a [ngClass]="'example' | gainsight: 'gainsight'" target="_blank" rel="noopener" href="https://quasarke.com"></a>
```
the class outputs as gpx-gainsight-example if the featurepath is provile or gpx-example if none is

There are alternative ways of loading this library if needed and the script source used can be overridden 

```
GainsightModule.forRoot({ tagKey: 'XX-XXXXXX',config: { user:{ id: '1', email: 'bob@bob.com'}, account: {id:'1', name:'acme'}} , scriptSource: 'https://web-sdk.aptrinsic.com/api/aptrinsic.js' })
```
will load all the data on module import

alternatively you can load the module without for root

```
   imports: [
    ...
    GainsightModule
    ...
  ],
```
then call the functions in the service

```
  constructor(private gainsight: GainsightService) {
    this.gainsight.InjectGainSight('XX-XXXXX'); 
    this.gainsight.initGainSight({ user:{ id: '1', email: 'bob@bob.com'}, account: {id:'1', name:'acme'}})
  }
```


