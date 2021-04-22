import { Application } from 'express';

export interface IBaseRoute {
  register(app: Application): void;
}
