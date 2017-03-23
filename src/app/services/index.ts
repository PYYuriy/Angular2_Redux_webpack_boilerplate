import { DataResolver } from './app.resolver';
import { AppState } from './app.service';

export const SERVICES = [
    AppState
];

// an array of services to resolve routes with data
export const APP_RESOLVER_PROVIDERS = [
    DataResolver
];
