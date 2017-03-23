import { Injectable } from '@angular/core';
import { ErrorsAction } from '../redux/actions/errors.action';

@Injectable()
export class ErrorService {
  constructor(private errorsAction: ErrorsAction) {}
  public handleError(res, predicate) {
    if (res.success || res.ok !== 0) {
      return predicate(res);
    }
    return this.errorsAction.setError(res, false);
  }
  public succesMsg(msg) {
    this.errorsAction.setError(msg);
  }
  public errorMsg(msg) {
    this.errorsAction.setError(msg, false);
  }
  public infoMsg(msg) {
    this.errorsAction.setError(msg, true);
  }
}
