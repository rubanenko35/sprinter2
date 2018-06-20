import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnsubscribeOnDestroy } from 'app/utils/unsubscribe';
import { takeUntil } from 'rxjs/internal/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends UnsubscribeOnDestroy implements OnInit {

  private popUpType: string = 'xz';

  public loginForm: FormGroup;
  entryEmailValid = true;

  entryEmailLabel = 'dsds';

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    super();

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe( res => {
        this.popUpType = res.get('type');
      });
  }

  public get type() {
    return this.popUpType;
  }


}
