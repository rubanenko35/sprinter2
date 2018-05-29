import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs/index';

export class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}
