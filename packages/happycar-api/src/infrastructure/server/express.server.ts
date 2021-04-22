import { Server as HTTPServer } from 'http';
import cors from 'cors';

import * as bodyParser from 'body-parser';
import bearerToken from 'express-bearer-token';
import { Express } from 'express';
import { errorMiddleware } from './middleware/error.middleware';
import TYPES from '../../DI/dependencies';
import container from '../../DI/inversify.config';
import { getConfig } from '../../config';
import { IBaseRoute } from '../routes/base.route';

export class Server {
  public httpServer: HTTPServer;
  public server: Express;

  constructor(server: Express, port: number) {
    this.server = server;
    this.setupStandardMiddleware(server);
    this.attachController();
    this.server.use(errorMiddleware);
    this.httpServer = this.startListen(server, port);
  }

  public startListen(server: Express, port: number): HTTPServer {
    return server.listen(port);
  }

  private setupStandardMiddleware(server: Express) {
    server.use(bodyParser.json({ limit: '10mb' }));
    server.use(bearerToken());
    server.use(
      cors({
        origin: getConfig().settings.origin.split(',').toString(),
        credentials: true,
      })
    );
  }

  private attachController() {
    try {
      const routes: IBaseRoute[] = container.getAll<IBaseRoute>(TYPES.Routes);
      routes.forEach((route) => route.register(this.server));
    } catch (e) {
      console.log('Error initializing API routes', e);
    }
  }
}
