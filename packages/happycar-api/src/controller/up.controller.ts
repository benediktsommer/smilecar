import { BaseController } from './base-controller';

export class UpController extends BaseController<string> {
  public async executeImpl() {
    console.log('asdasd');
    return this.ok('ok');
  }
}
