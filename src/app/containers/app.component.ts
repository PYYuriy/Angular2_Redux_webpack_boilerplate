/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import rootReducer from '../redux/reducers';
import { IAppState } from '../redux/reducers/index';
import { enhancers, middleware } from '../redux/store/index';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  templateUrl: './app.html'
})

export class AppComponent {
  public name = 'Angular 2 Webpack Starter';

  // Nav bar demo
  public tabLinks = [
    {label: 'Index',  link: '',       icon: 'label_outline' },
    {label: 'Home',   link: 'home',   icon: 'home'},
    {label: 'Detail', link: 'detail', icon: 'find_in_page'},
    {label: 'About',  link: 'about',  icon: 'subject'},
  ];

  private viewContainerRef: ViewContainerRef;

  constructor(viewContainerRef: ViewContainerRef,
              private ngRedux: NgRedux<IAppState>) {

    ngRedux.configureStore(rootReducer, {home: undefined}, middleware, enhancers);
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
    // console.log(s3)
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
