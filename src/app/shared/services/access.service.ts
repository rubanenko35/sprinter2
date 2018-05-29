import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/index';


@Injectable()
export class AccessService {
  constructor(private router: Router) {}


  public checkAccess(url, canAccess): Observable<boolean>|Promise<boolean>|boolean {
      return Observable.create((observer) => {
      });
  }

}
