import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
@Component({
  selector: 'app-blogoverview',
  templateUrl: './blogoverview.component.html',
  styleUrls: ['./blogoverview.component.css']
})
export class BlogoverviewComponent implements OnInit {

  posts$: Observable<ScullyRoute[]>;

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {
    this.posts$ = this.srs.available$.pipe(
      map(routeList => {
        let myPosts = routeList.filter((route: ScullyRoute) =>
        route.route.startsWith(`/blog/`),
      );
      console.log("Posts = ", myPosts)
        return myPosts
      })
    );
  }
}
