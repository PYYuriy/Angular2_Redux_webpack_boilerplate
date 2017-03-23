import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'footer-com',
  templateUrl: './footer.html'
})
export class FooterComponent implements OnInit, OnDestroy {
  public messageData;
  private unsubscribe = [];

  constructor(private ngRedux: NgRedux<any>) {
    console.log('footer');
  }

  public ngOnInit() {
    this.unsubscribe.push(this.ngRedux.select(['home', 'someMessage']).subscribe((el: any) => {
      console.log(el);
      this.messageData = el;
    }));
  }

  public ngOnDestroy() {
    this.unsubscribe.forEach((el) => el.unsubscribe());
  }
}
