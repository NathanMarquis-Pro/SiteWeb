import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { provideRouter } from '@angular/router';
import { appConfig } from './app.config';
import { routes } from './app.routes';
import { serverRoutes } from './app.routes.server';

/**
 * Le routeur n'est fourni que côté serveur : il sert uniquement à découvrir les routes à
 * pré-rendre (`/` et `/en`). Le bundle navigateur reste sans routeur.
 */
const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes)), provideRouter(routes)],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
