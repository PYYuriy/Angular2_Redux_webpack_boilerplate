import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorsAction {
  protected SET_ERROR = 'SET_ERROR';

  constructor(private ngRedux: NgRedux<any>) {}

 public setError(error, info?) {
    this.ngRedux.dispatch({
      type: this.SET_ERROR,
      value: {
        severity: info ? 'info' : info === false ? 'error' : 'success',
        summary: info ? 'Info Message' : info === false ? 'Error Message' : 'Success Message',
        detail: error}
    });
  }
}
