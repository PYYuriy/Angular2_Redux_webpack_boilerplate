import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'about-comp',
  templateUrl: './about.html'
})
export class AboutComponent implements OnInit, OnDestroy {
  private unsubscribe: any[] = [];
  private messageData: string;

  constructor(private ngRedux: NgRedux<any>) {
    console.log('footer');
  }

  public ngOnInit() {
    this.unsubscribe.push(this.ngRedux.select(['home', 'someMessage']).subscribe((el: any) => {
      this.messageData = el;
    }));
  }

  public ngOnDestroy() {
    this.unsubscribe.forEach((el) => el.unsubscribe());
  }
}
