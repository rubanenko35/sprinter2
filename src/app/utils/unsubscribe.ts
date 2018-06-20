import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/index';

export abstract class UnsubscribeOnDestroy implements OnDestroy {
  protected destroy$: Subject<any>;

  constructor() {
    this.destroy$ = new Subject<void>();

    const f = this.ngOnDestroy;
    this.ngOnDestroy = () => {
      f();
      this.destroy$.complete();
    };
  }

  public ngOnDestroy() {
    // no-op
  }
}
