import { BaseController } from './base-controller';

export class UpController extends BaseController<string> {
  public async executeImpl() {
    return this.ok('ok');
  }
}
