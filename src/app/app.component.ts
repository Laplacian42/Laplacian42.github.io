import { Component, OnInit } from '@angular/core';

import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digitize-it';
  isActive = true;
  posts$: Observable<ScullyRoute[]>;

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {
    this.posts$ = this.srs.available$.pipe(
      map(routeList => {
        let myPosts = routeList.filter((route: ScullyRoute) =>
        route.route.startsWith(`/blog/`),
      );
      console.log(myPosts)
        return myPosts
      })
    );
  }
}
