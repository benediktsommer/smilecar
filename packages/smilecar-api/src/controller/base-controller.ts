import { NextFunction, Request, Response } from 'express';
import { injectable } from 'inversify';

import { log } from '../utils/Logger';

@injectable()
export abstract class BaseController<R> {
  private req: Partial<Request>;
  private res: Response;

  public execute = async (req: Partial<Request>, res: Response, next: NextFunction): Promise<void> => {
    this.req = req;
    this.res = res;
    await this.executeImpl();
    return next();
  };

  protected abstract executeImpl(): Promise<
    Response<R> | Response<number>
    >;

  protected ok(dto?: R) {
    if (dto) {
      return this.jsonResponse<R>(200, dto);
    } else {
      return this.res.send(200);
    }
  }

  protected created() {
    return this.res.send(201);
  }

  protected badRequest(message?: string | null, errorTypes?: Array<{ type: string }>) {
    this.res.status(400);
    this.res.send(
      Object.assign({}, message ? { message } : { message: 'Bad Request' }, {
        errorTypes,
      })
    );
  }

  protected unauthorized(message?: string) {
    return this.jsonErrorResponse(401, message ? { message } : { message: 'Unauthorized' });
  }

  protected paymentRequired(message?: string) {
    return this.jsonErrorResponse(402, message ? { message } : { message: 'Payment required' });
  }

  protected forbidden(message?: string) {
    return this.jsonErrorResponse(403, message ? { message } : { message: 'Forbidden' });
  }

  protected notFound(message?: string) {
    return this.jsonErrorResponse(404, message ? { message } : { message: 'Not found' });
  }

  protected conflict(message?: string) {
    return this.jsonErrorResponse(409, message ? { message } : { message: 'Conflict' });
  }

  protected tooMany(message?: string) {
    return this.jsonErrorResponse(429, message ? { message } : { message: 'Too many requests' });
  }

  protected fail(error: string): Response<any> {
    log.info(error.toString());

    return this.jsonErrorResponse(500, { message: error });
  }

  private jsonResponse<R>(code: number, message: R): Response<R> {
    this.res.status(code);
    return this.res.send(message);
  }

  private jsonErrorResponse(code: number, message?: string | any): Response<any> {
    this.res.status(code);
    return this.res.send(message);
  }
}
