export interface GainSightConfig {
user: GainSightUser;
account: GainSightAccount;
[x: string]: any;
}

export interface GainSightUser {
  id: string,
  email?: string,
  firstName?: string,
  lastName?: string,
  role?: string,
  [x: string]: any;
}

export interface GainSightAccount {
  id: string;
  name?: string;
  sfdcId?: string;
  [x: string]: any;
}

export interface GainsightOptions {
  tagKey: string;
  config?: GainSightConfig
  scriptSource?: string;
}
