import { Component } from '@angular/core';
import { HomeActions } from '../../redux/actions/home.action';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // Our list of styles in our component. We may add more to compose many styles together
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Set our default values
  public home;
  constructor(private homeActions: HomeActions) {}

  public sendMessage() {
    console.log(this.home);
    this.homeActions.sendMessage(this.home);
  }

}
