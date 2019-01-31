import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router'
;
import { SIDING_PAGES } from '../shared/consts'
import { slideInAnimation } from '../shared/consts';

@Component({
  selector: 'app-sliding',
  templateUrl: './sliding.component.html',
  styleUrls: ['./sliding.component.styl'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    slideInAnimation
  ]
})
export class SlidingComponent implements OnInit {
  curPageIdx = 0;
  curPageName = 'evolution';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if (this.router.url.split('/').length === 3) {
      this.curPageIdx = SIDING_PAGES.find(page => page.label === this.router.url.split('/')[2] ).idx;
    }
  }

  back() {
    this.curPageIdx > 0 ? this.router.navigate([SIDING_PAGES[--this.curPageIdx].route]) : this.router.navigate(['why']);
  }

  forward() {
    this.curPageIdx <= 10 ? this.router.navigate([SIDING_PAGES[++this.curPageIdx].route]) : this.router.navigate(['why']);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
