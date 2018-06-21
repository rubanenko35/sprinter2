import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnsubscribeOnDestroy } from 'app/utils/unsubscribe';
import { takeUntil } from 'rxjs/internal/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseAuthService } from 'app/shared/services/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends UnsubscribeOnDestroy implements OnInit {

  private popUpType: string = '';

  public loginForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private fireAuth: FirebaseAuthService) {
    super();

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [''],
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
    // console.log(this.loginForm.controls)
    return this.popUpType;
  }

  public loginOnSubmit() {
    if (this.popUpType === 'login') {
      this.fireAuth.logIn({email: this.loginForm.value.username, password: this.loginForm.value.password})
        .then(
          res => {
            console.log(res);
          }, err => {
            console.log(err);
          });
    } else if (this.popUpType === 'sing-up') {

    }
  }

  public hidePopUp() {
    this.popUpType = null;
    this.router.navigate(['']);
  }

}
