
import logger from './configure-logger';

export let enhancers = [];

export const middleware = [];
declare const __DEV__: boolean; // from webpack
if (true) {
  middleware.push(logger);

  const environment: any = window || this;
  if (environment.devToolsExtension) {
    enhancers.push(environment.devToolsExtension());
  }
}
