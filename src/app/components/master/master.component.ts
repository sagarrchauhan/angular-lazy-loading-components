import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LazyService } from 'src/app/services/lazy/lazy.service';
import { PageService } from 'src/app/services/page/page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {

  @ViewChild('dynamicComponents', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;


  data: any;
  pageSubscription: Subscription;

  constructor(
    private lazy: LazyService,
    private page: PageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(() => {
      this.pageSubscription = this.page
        .getPage(this.generateURL())
        .subscribe(
          (data: any) => {
            this.renderComponents(data);
          },
          e => {
            this.handleError(e);
          }
        );
    });
   }

  renderComponents(data: any) {
    this.lazy.loadAndRenderComponents(data, this.container);
  }

  generateURL() {
    const url = this.activatedRoute.snapshot.url.reduce(
      (a, i) => (a += i.path + '/'),
      ''
    );
    return url.substring(0, url.length - 1);
  }

  handleError(e: any) {
    console.log(e);
    this.router.navigate([`/error`]);
  }
}
